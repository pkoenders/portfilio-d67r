import React from 'react'

// Helpers
import { Link } from 'gatsby'
import moment from 'moment'
import i18n from '/config/i18n'

// Icons
import IconMaterial from '/src/components/common/icons/material'

// Layout
import ListItem from '../../common/layout/listResults/listItem'
import CardContent from '/src/components/common/layout/listResults/cardContent'
import Tags from '../../common/filter/tags'

const PeerSupportersItem = ({ currentLang, thisItem, showTags }) => {
  const item = thisItem.item.document
  const content = thisItem.item.document.data
  const tagData = thisItem.item.document.tags.sort()
  const title = content.title.text
  const eventType = content.type
  const intro = content.intro
  const location = content.location

  var currentDate = new Date()
  moment.locale(currentLang.slice(0, -3))

  currentDate.setDate(currentDate.getDate() - 2)
  const today = moment(currentDate).format()
  const start_date = content.start_date_time
  const end_date = content.end_date_time

  // console.log('end_date = ' + end_date)

  const date = moment(start_date).format('LL')
  const time = moment(start_date).format('LT')
  const endTime = moment(end_date).format('MMMM DD, LT')

  if (end_date) {
    var diff = moment.duration(moment(end_date).diff(moment(start_date)))
    var days = parseInt(diff.asDays()) //84
    var hours = parseInt(diff.asHours()) //2039 hours, but it gives total hours in given miliseconds which is not expacted.
    hours = hours - days * 24 // 23 hours
    var minutes = parseInt(diff.asMinutes()) //122360 minutes,but it gives total minutes in given miliseconds which is not expacted.
    minutes = minutes - (days * 24 * 60 + hours * 60) //20 minutes.
    var duration = ''
    if (days === 1) {
      duration = duration + ' ' + days + ` ${i18n[currentLang].day}`
    }
    if (days > 1) {
      duration = duration + ' ' + days + ` ${i18n[currentLang].days}`
    }
    if (hours === 1) {
      duration = duration + ' ' + hours + ` ${i18n[currentLang].hour}`
    }
    if (hours > 1) {
      duration = duration + ' ' + hours + ` ${i18n[currentLang].hours}`
    }
    if (minutes === 1) {
      duration = duration + ' ' + minutes + ` ${i18n[currentLang].minute}`
    }
    if (minutes > 1) {
      duration = duration + ' ' + minutes + ` ${i18n[currentLang].minutes}`
    }
  }

  return (
    <>
      {item.uid && (
        <ListItem className={'item show'}>
          <Link to={`${item.uid}`} className="card">
            <CardContent>
              <div className="content">
                {title && (
                  <div className="title">
                    {title}
                    <IconMaterial icon={'arrow_forward'} />
                  </div>
                )}
                {eventType === 'News item' && date && <time>{date}</time>}
                {intro && <p>{intro}</p>}
              </div>

              {eventType === 'Event' && (
                <div className="details">
                  {today < start_date && (
                    <>
                      {date && (
                        <time aria-label="Date">
                          <IconMaterial icon={'event'} />
                          {date}
                        </time>
                      )}
                      {time && (
                        <time aria-label={`${i18n[currentLang].starts}`}>
                          <IconMaterial icon={'schedule'} />
                          {i18n[currentLang].starts}: {time}
                        </time>
                      )}
                      {end_date > start_date && (
                        <time aria-label={`${i18n[currentLang].ends}`}>
                          <IconMaterial icon={'access_time_filled'} />
                          {i18n[currentLang].ends}: {endTime}
                        </time>
                      )}
                      {duration && (
                        <time aria-label={`${i18n[currentLang].duration}`}>
                          <IconMaterial icon={'timelapse'} />
                          {i18n[currentLang].duration}: {duration}
                        </time>
                      )}
                    </>
                  )}

                  {today > start_date && (
                    <time className="passed" aria-label={i18n[currentLang].previousEvent}>
                      <IconMaterial icon={'event_busy'} />
                      <span className="srike">{date}</span>
                      {i18n[currentLang].previousEvent}
                    </time>
                  )}

                  {location && (
                    <address aria-label="Loaction">
                      <IconMaterial icon={'place'} />
                      {location}
                    </address>
                  )}

                  {showTags === true && tagData.length > 0 && <Tags tagData={tagData} />}
                </div>
              )}

              {eventType === 'News item' && showTags === true && tagData.length > 0 && (
                <span className="details">
                  <Tags tagData={tagData} />
                </span>
              )}
            </CardContent>
          </Link>
        </ListItem>
      )}
    </>
  )
}

export default PeerSupportersItem
