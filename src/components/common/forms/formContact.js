import React, { useState, useEffect, useCallback } from 'react'

// Helpers
import { Form, Field } from 'react-final-form'
import { isRequired, isValidEmail } from './validators'
import linkResolver from '../../../utils/linkResolver'
import { RichText } from 'prismic-reactjs'
import {
  getContentWidth,
  getBgColor,
  getColorTint,
  getRgb2Hex,
  getContrast,
  validateString,
  getAutoSpacing,
  getManualSpacing,
  getStyle,
} from '/src/utils/helpers'

// Form elements
import FormWrapper from './formWrapper'
import TextInput from './formFields/textInput'
import CheckBox from './formFields/checkBox'
import RadioBtn from './formFields/radioBtn'
import SelectList from './formFields/selectList'
import TextAreaInput from './formFields/textAreaInput'
import SubmitSuccess from './formFields/submitSuccess'
import SubmittError from './formFields/submitError'

// Icons
import IconMaterial from '/src/components/common/icons/material'

// Layout
import Button from '/src/components/common/buttons/linkButton'
// import { parseZone } from 'moment'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactNew = ({ formData, slice }) => {
  // Set default contrast color class
  const setContrast = 'light'

  // If form is a slice from a page, set up the layout
  if (formData === undefined) {
    // Set up the section with an id and some classes and styles
    // Add a page ID to reference
    var sectionID = slice.id
    // Set the content width class
    var sectionWidth = getContentWidth(slice.primary.width)
    // Set the bgColor class
    var bgColor = getBgColor(slice.primary.background_color)
    const bGroundTint = getColorTint(slice.primary.background_tint)
    bgColor = 'background-' + bgColor + '-' + bGroundTint
    // Set the vertical padding - inline style
    const defaultPadding = getAutoSpacing(slice.primary.default_padding)
    var vPaddingTop = getManualSpacing(slice.primary.v_padding_top)
    var vPaddingBottom = getManualSpacing(slice.primary.v_padding_bottom)
    if (vPaddingTop === null) {
      vPaddingTop = defaultPadding + 'px'
    }
    if (vPaddingBottom === null) {
      vPaddingBottom = defaultPadding + 'px'
    }
  }

  // Set the state of the forGroundColor
  const [forGroundColor, setForgroundColor] = useState(setContrast)
  // Find the current bground color of the section and update the forground color class
  useEffect(() => {
    if (formData === undefined) {
      var objBground = document.getElementById(`${sectionID}`)
      let bgColor = window.getComputedStyle(objBground).backgroundColor
      // Convert it a hex value
      bgColor = getRgb2Hex(bgColor)

      // If there is a bGround color - return the contrast mode  - 'dark' or 'light'
      let updateContrast
      bgColor !== '#00000000' ? (updateContrast = getContrast(bgColor)) : (updateContrast = '')

      // Update contrast color and set it as a class in the section
      setForgroundColor(updateContrast)
      // Disable warinings of missing dependencies
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, sectionID])

  const [requiredFieldSet, setRequiredFieldSet] = useState(true)
  const [errorMessage, setErrorMsg] = useState(false)
  const [successMessage, setSuccessMsg] = useState(false)

  // Form come from from a slice like Homepage or General page?
  var allFormData = []
  if (formData === undefined) {
    allFormData = slice.primary
  }
  // Or other templates calling the form from outside a slice
  if (slice === undefined) {
    allFormData = formData
  }

  // Validate form name
  const formName = validateString(allFormData.select_form.document.data.form_name.text)
  // Validate form description
  const formDecription = validateString(allFormData.select_form.document.data.from_content.richText)
  // Form data
  const formDataFields = allFormData.select_form.document.data.body

  var pathName = ''
  if (typeof window !== 'undefined') {
    pathName = window.location.pathname
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRequiredFieldSet(true)
    const legends = [...document.querySelectorAll('.fieldSetRequired')]
    for (const legend of legends) {
      if (legend.classList.contains('isRequired')) {
        legend.classList.add('error')
        return
      }
    }

    const data = new FormData(e.target)
    const formDataEntries = Object.fromEntries(data.entries())

    fetch(`/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        ...formDataEntries,
      }),
    })
      .then((res) => {
        if (res) {
          setSuccessMsg(true)

          // console.log('form submit')
          document.querySelector('form').classList.add('hide')
        }
      })

      .catch((error) => setErrorMsg(true))
  }

  const resetForm = () => {
    setSuccessMsg(false)
    setRequiredFieldSet(true)
    const legends = [...document.querySelectorAll('.fieldSetRequired')]
    for (const legend of legends) {
      legend.classList.add('isRequired')
      legend.classList.remove('error')
    }

    document.querySelector('form').classList.remove('hide')
    document.querySelector('form').reset()
  }

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  const toggleFieldSet = useCallback((e) => {
    if (e.target.closest('fieldset').classList.contains('requiredSet')) {
      removeError()
      if (e.target.checked === false) {
        addError()
        setRequiredFieldSet(true)
      }

      const allCheckbox = [
        ...e.target.closest('fieldset').querySelectorAll("input[type='checkbox']"),
      ]
      for (const checkBox of allCheckbox) {
        if (checkBox.checked === true) {
          removeError()
          setRequiredFieldSet(false)
        }
      }
      // setRequiredFieldSet(false)
    }

    function removeError() {
      e.target
        .closest('fieldset')
        .querySelector('.fieldSetRequired')
        .classList.remove('isRequired', 'error')

      e.target.closest('fieldset').querySelector('legend').querySelector('span').innerHTML =
        'Required'

      e.target.closest('fieldset').querySelector('legend').setAttribute('aria-invalid', 'false')
    }

    function addError() {
      e.target
        .closest('fieldset')
        .querySelector('.fieldSetRequired')
        .classList.add('isRequired', 'error')

      e.target.closest('fieldset').querySelector('legend').querySelector('span').innerHTML =
        'A selection is required'

      e.target.closest('fieldset').querySelector('legend').setAttribute('aria-invalid', 'true')
    }
  }, [])

  return (
    // Set up ID and styles if from is from a slice
    <section
      // id={formData === undefined && sectionID}
      id={sectionID}
      className={`section-layout form ${sectionWidth} ${forGroundColor} ${bgColor}`}
      style={{
        paddingTop: vPaddingTop,
        paddingBottom: vPaddingBottom,
      }}
    >
      <FormWrapper>
        {formDecription && (
          <div className="titleArea">
            <RichText render={formDecription} linkResolver={linkResolver} />
          </div>
        )}

        <Form onSubmit={onSubmit}>
          {({ values, invalid }) => (
            <form
              id="form"
              className="form"
              name={formName}
              // noValidate
              method="post"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value={formName} />
              <input type="hidden" name="location" value={pathName} />

              {formDataFields.map((fields, index) => {
                return (
                  <>
                    {/* Add rich text */}
                    {formDataFields[index].slice_type === 'rich_text' && (
                      <div
                        key={formDataFields[index].id}
                        id={`Described by ${formDataFields[index].primary.described}`}
                        className={`richText ${formDataFields[
                          index
                        ].primary.align_with_input.toLowerCase()}`}
                      >
                        {formDataFields[index].primary.text.text && (
                          <RichText
                            render={formDataFields[index].primary.text.richText}
                            linkResolver={linkResolver}
                          />
                        )}
                      </div>
                    )}

                    {/* Add text input */}
                    {formDataFields[index].slice_type === 'text_input' && (
                      <Field
                        id={formDataFields[index].id}
                        name={formDataFields[index].primary.field_name.text}
                        label={formDataFields[index].primary.field_name.text}
                        type={formDataFields[index].primary.field_type.toLowerCase()}
                        component={TextInput}
                        describedby={formDataFields[index].primary.described_by}
                        validate={
                          formDataFields[index].primary.required === true
                            ? formDataFields[index].primary.field_type.toLowerCase() === 'email'
                              ? isValidEmail
                              : isRequired
                            : ''
                        }
                      />
                    )}

                    {/* Add check box */}
                    {formDataFields[index].slice_type === 'checkbox' && (
                      <fieldset
                        key={formDataFields[index].id}
                        className={
                          'checkBoxes ' +
                          `${formDataFields[index].primary.align}`.toLowerCase() +
                          `${formDataFields[index].primary.required === true && ' requiredSet'}`
                        }
                      >
                        <legend
                          aria-describedby={
                            formDataFields[index].primary.described_by &&
                            `Described by ${formDataFields[index].primary.described_by}`
                          }
                          aria-invalid="false"
                        >
                          {formDataFields[index].primary.title.text}
                          {formDataFields[index].primary.required === true && (
                            <span className="fieldSetRequired isRequired required">Required</span>
                          )}
                        </legend>

                        {formDataFields[index].items.map((chekbox, i) => {
                          return (
                            <Field
                              id={formDataFields[index].id + i}
                              name={chekbox.item.text}
                              label={chekbox.item.text}
                              component={CheckBox}
                              onClick={toggleFieldSet}
                            />
                          )
                        })}
                      </fieldset>
                    )}

                    {/* Add radio button */}
                    {formDataFields[index].slice_type === 'radio_button' && (
                      <fieldset
                        key={formDataFields[index].id}
                        className={
                          'radioBtns ' +
                          `${formDataFields[index].primary.align}`.toLowerCase() +
                          `${formDataFields[index].primary.required === true && ' requiredSet'}`
                        }
                      >
                        <legend
                          aria-describedby={
                            formDataFields[index].primary.described &&
                            `Described by ${formDataFields[index].primary.described}`
                          }
                          aria-invalid="false"
                        >
                          {formDataFields[index].primary.title.text}
                          {formDataFields[index].primary.required === true && (
                            <span className="fieldSetRequired isRequired required">Required</span>
                          )}
                        </legend>
                        {formDataFields[index].items.map((radioBtn, i) => {
                          return (
                            <Field
                              id={formDataFields[index].id + i}
                              name={formDataFields[index].primary.title.text}
                              fieldName={radioBtn.item.text}
                              label={radioBtn.item.text}
                              component={RadioBtn}
                              onClick={toggleFieldSet}
                            />
                          )
                        })}
                      </fieldset>
                    )}

                    {/* Add select list */}
                    {formDataFields[index].slice_type === 'select_list' && (
                      <fieldset
                        key={formDataFields[index].id}
                        className={`${
                          formDataFields[index].primary.required === true && 'requiredSet'
                        }`}
                      >
                        <label htmlFor={formDataFields[index].primary.title.text}>
                          {formDataFields[index].primary.title.text}
                          {formDataFields[index].primary.required === true && (
                            <span className="fieldSetRequired isRequired required">Required</span>
                          )}

                          <div className="select">
                            <IconMaterial icon={'expand_more'} />
                            <select
                              name={formDataFields[index].primary.title.text}
                              onClick={toggleFieldSet}
                              aria-describedby={
                                formDataFields[index].primary.described &&
                                `Described by ${formDataFields[index].primary.described}`
                              }
                            >
                              {formDataFields[index].items.map((listItem, i) => {
                                return (
                                  <Field
                                    id={formDataFields[index].id + i}
                                    name={listItem.item.text}
                                    label={listItem.item.text}
                                    component={SelectList}
                                    onClick={toggleFieldSet}
                                    describedby={formDataFields[index].primary.described_by}
                                  />
                                )
                              })}
                            </select>
                          </div>
                        </label>
                      </fieldset>
                    )}

                    {/* Add text area input */}
                    {formDataFields[index].slice_type === 'text_area_input' && (
                      <Field
                        id={formDataFields[index].id}
                        name={formDataFields[index].primary.field_name.text}
                        label={formDataFields[index].primary.field_name.text}
                        component={TextAreaInput}
                        describedby={formDataFields[index].primary.described_by}
                        validate={formDataFields[index].primary.required === true ? isRequired : ''}
                      />
                    )}

                    {/* Add submit button */}
                    {formDataFields[index].slice_type === 'button' && (
                      <div key={formDataFields[index].id} className={'submitForm'}>
                        {(invalid || requiredFieldSet === true) && (
                          <div className="requiredCheck">
                            Please ensure that the required form fields are completed
                          </div>
                        )}

                        <Button
                          buttonLabel={formDataFields[index].primary.button_name.text}
                          buttonType={'submit'}
                          buttonStyle={getStyle(formDataFields[index].primary.button_type)}
                          buttonIcon={'send'}
                          buttonIconAlign={'right'}
                        />
                      </div>
                    )}
                  </>
                )
              })}

              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        </Form>
        <div aria-live="polite">
          {errorMessage && <SubmittError resetForm={resetForm} />}
          {successMessage && <SubmitSuccess resetForm={resetForm} />}
        </div>
      </FormWrapper>
    </section>
  )
}

export default ContactNew
