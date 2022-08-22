import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Chart from 'chart.js/auto'

// Helpers
import { useTable, useSortBy } from 'react-table'

// Page components
import Icon from '/src/components/common/icons/material'

// Layout
import Section from '/src/components/common/layout/pageLayout/'
import styled from 'styled-components'

const LighthouseScoresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  grid-gap: ${({ theme }) => theme.padding.default};
  margin: ${({ theme }) => theme.padding['1/2']} 0 ${({ theme }) => theme.padding.default};

  div {
    text-align: center;

    canvas {
      overflow: visible;
      position: relative;
      z-index: 10;
      width: 160px;
      max-width: 160px;
      max-height: 160px;
    }
  }
`

const LighthouseScoresTableWrapper = styled.div`
  padding-top: ${({ theme }) => theme.padding['2xl']};

  .title {
    padding: ${({ theme }) => theme.padding['1/4']};
    text-align: center;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/4']};
    .detail {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      /* font-size: ${({ theme }) => theme.fontSize.md}; */
      font-weight: 400;
      color: ${({ theme }) => theme.colors.page['800']};
    }
  }

  .tableWrapper {
    border: 1px solid ${({ theme }) => theme.colors.card[300]};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;
    max-height: 528px;
    overflow: scroll;
  }

  table {
    width: 100%;

    border-spacing: 0;
    /* position: relative; */

    thead {
      position: sticky;
      z-index: 2;
      top: 0px;
      left: 0px;
      right: 0px;
      background-color: ${({ theme }) => theme.colors.page.bground.default};
    }

    thead:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      /* bottom: -1px; */
      border-bottom: 1px solid ${({ theme }) => theme.colors.card[400]};
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    tr:nth-child(even) {
      background: ${({ theme }) => theme.colors.card[200]};
    }

    th {
      button {
        text-align: left;
        font-weight: 500;
        display: flex;
        padding: ${({ theme }) => theme.margin['1/4']} 0;
        align-items: center;
        /* justify-content: space-between; */
        /* border-radius: ${({ theme }) => theme.borderRadius.sm}; */
        white-space: nowrap;

        i {
          margin: 0 ${({ theme }) => theme.margin['1/16']} 0 0;
          width: fit-content;
          position: relative;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: ${({ theme }) => theme.padding['1/4']};
      text-align: center;
      /* border-bottom: 1px solid black; */
      border-right: 1px solid ${({ theme }) => theme.colors.card[400]};
      vertical-align: middle;
      i {
        line-height: inherit;
      }

      :last-child {
        border-right: 0;
      }

      :first-child {
        text-align: left;
        white-space: normal;
      }
    }

    td.green {
      /* color: #fff; */
      background-color: ${({ theme }) => theme.colors.alert.l1[100]};
    }
    tr:nth-child(even) td.green {
      background-color: ${({ theme }) => theme.colors.alert.l1[200]};
    }
    td.red {
      /* color: #fff; */
      background-color: ${({ theme }) => theme.colors.alert.l5[100]};
    }
    tr:nth-child(even) td.red {
      background-color: ${({ theme }) => theme.colors.alert.l5[200]};
    }

    tbody {
    }
  }
`

// Create a default prop getter
const defaultPropGetter = () => ({})

function ReactTable({ columns, data, getCellProps = defaultPropGetter }) {
  // Use the state and functions returned from useTable to build your UI

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} aria-describedby="table-description">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <button type="button" onKeyDown={keyEscape}>
                    {/* Add a sort direction indicator */}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon icon={'expand_less'} />
                      ) : (
                        <Icon icon={'expand_more'} />
                      )
                    ) : (
                      <Icon icon={'unfold_more'} />
                    )}
                    {/* Label */}
                    {column.render('Header')}
                  </button>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                        },

                        getCellProps(cell),
                      ])}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

const keyEscape = function (e) {
  switch (e.key) {
    case 'Escape':
      e.preventDefault()
      // window.history.back()'

      console.log('Escape')
      break

    default:
      break
  }
}

const LighthouseScores = () => {
  const data = useStaticQuery(graphql`
    query tableQuery {
      allGoogleSpreadsheetLighthouseScores(sort: { order: ASC, fields: name }) {
        totalCount
        edges {
          node {
            url
            name
            secure
            responsive
            pwa
            noErrors
            accessiblity
            seo
            performance
            bestPractice
          }
        }
      }
    }
  `)

  const columns = React.useMemo(
    () => [
      {
        Header: 'URL',
        accessor: 'url', // accessor is the "key" in the data
      },
      {
        Header: 'No errors',
        accessor: 'errors',
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? (
            <Icon ariaLabel="True" icon={'done'} />
          ) : (
            <Icon ariaLabel="False" icon={'close'} />
          ),
      },
      {
        Header: 'Responsive',
        accessor: 'responsive',
        Cell: ({ cell: { value } }) =>
          // value === 'TRUE' ? (className) : (className = 'red'),
          value === 'TRUE' ? (
            <Icon ariaLabel="True" icon={'done'} />
          ) : (
            <Icon ariaLabel="False" icon={'close'} />
          ),
      },

      {
        Header: 'Secure',
        accessor: 'secure', // accessor is the "key" in the data
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? (
            <Icon ariaLabel="True" icon={'done'} />
          ) : (
            <Icon ariaLabel="False" icon={'close'} />
          ),
      },

      {
        Header: 'PWA',
        accessor: 'pwa',
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? (
            <Icon ariaLabel="True" icon={'done'} />
          ) : (
            <Icon ariaLabel="False" icon={'close'} />
          ),
      },

      {
        Header: 'Accessible',
        accessor: 'accessiblity',
      },
      {
        Header: 'SEO',
        accessor: 'seo',
      },

      {
        Header: 'Performance',
        accessor: 'performance',
      },

      {
        Header: 'Best practice',
        accessor: 'bestPractice',
      },
    ],
    []
  )

  var tableData = data.allGoogleSpreadsheetLighthouseScores

  // Set up some average number for charts
  // const lightHouseArray = []
  const accessiblityArray = []
  const seoArray = []
  const performanceArray = []
  const bestPracticeArray = []

  tableData.edges
    .filter((row) => row.node.url !== null)
    .filter((row) => row.node.url.includes('.'))
    .filter((row) => row.node.accessiblity !== null)
    .filter((row) => row.node.seo !== null)
    .filter((row) => row.node.bestPactice !== null)
    .forEach((score) => {
      accessiblityArray.push(score.node.accessiblity)
      seoArray.push(score.node.seo)
      performanceArray.push(score.node.performance)
      bestPracticeArray.push(score.node.bestPractice)
    })

  // console.log(accessiblityArray)
  const accessiblityData = getAverageLighthouseScore(accessiblityArray)
  const seoData = getAverageLighthouseScore(seoArray)
  const performanceData = getAverageLighthouseScore(performanceArray)
  const bestPracticeData = getAverageLighthouseScore(bestPracticeArray)
  // lightHouseArray.push(getAverageLighthouseScore(accessiblityArray))
  // lightHouseArray.push(getAverageLighthouseScore(seoArray))
  // lightHouseArray.push(getAverageLighthouseScore(performanceArray))
  // lightHouseArray.push(getAverageLighthouseScore(bestPracticeArray))

  function getAverageLighthouseScore(scores) {
    var sum = 0
    for (var i = 0; i < scores.length; i++) {
      sum += parseInt(scores[i], 10) //don't forget to add the base
    }
    return Math.round(sum / scores.length)
  }

  // console.log('The accessiblity Data  is: ' + accessiblityData)

  // console.log(`${({ theme }) => theme.colors.alert.l1[300]}`)

  // Chart stuff
  // Accessibility
  useEffect(() => {
    const accessibilityChart = document.getElementById('accessibilityChart')
    const myAccessibilityChart = new Chart(accessibilityChart, {
      type: 'doughnut',
      data: {
        // labels: [`Accessibility ${accessiblityData}%`],
        datasets: [
          {
            data: [`${accessiblityData}`, 100 - `${accessiblityData}`],
            backgroundColor: [`#F9DA8E`, `#EDF2F7`],
            hoverOffset: 4,
            borderWidth: 0,
            borderRadius: 100,
          },
        ],
      },

      options: {
        hover: { mode: null },
        responsive: true,
        cutout: 64,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        },
      },
    })

    // SEO
    const seoChart = document.getElementById('seoChart')
    const mySeoChart = new Chart(seoChart, {
      type: 'doughnut',
      data: {
        // labels: [`SEO ${seoData}%`],
        datasets: [
          {
            data: [`${seoData}`, 100 - `${seoData}`],
            backgroundColor: [`#F9DA8E`, `#EDF2F7`],
            hoverOffset: 4,
            borderWidth: 0,
            borderRadius: 100,
          },
        ],
      },
      options: {
        responsive: true,
        hover: { mode: null },
        cutout: 64,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        },
      },
    })

    // Performance
    const performanceChart = document.getElementById('performmanceChart')
    const myPerformanceChart = new Chart(performanceChart, {
      type: 'doughnut',
      data: {
        // labels: [`Performance ${performanceData}%`],
        datasets: [
          {
            data: [`${performanceData}`, 100 - `${performanceData}`],
            backgroundColor: [`#F1BA8B`, `#EDF2F7`],
            hoverOffset: 4,
            borderWidth: 0,
            borderRadius: 100,
          },
        ],
      },
      options: {
        responsive: true,
        hover: { mode: null },
        cutout: 64,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        },
      },
    })

    // Best practice
    const bestPracticeChart = document.getElementById('bestPracticeChart')
    const mybestPracticeChart = new Chart(bestPracticeChart, {
      type: 'doughnut',
      data: {
        // labels: [`Best practice ${bestPracticeData}%`],
        datasets: [
          {
            data: [`${bestPracticeData}`, 100 - `${bestPracticeData}`],
            backgroundColor: [`#F9DA8E`, `#EDF2F7`],
            hoverOffset: 4,
            borderWidth: 0,
            borderRadius: 100,
          },
        ],
      },
      options: {
        responsive: true,
        hover: { mode: null },
        cutout: 64,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        },
      },
    })

    return () => {
      myAccessibilityChart.destroy()
      mySeoChart.destroy()
      myPerformanceChart.destroy()
      mybestPracticeChart.destroy()
    }
  }, [accessiblityData, seoData, bestPracticeData, performanceData])

  return (
    <Section
      // contentSize={'xl noMarginTop'}
      classOverides={'xl'}
    >
      <div style={{ marginTop: '64px ', marginBottom: '64px ' }}>
        <LighthouseScoresTableWrapper>
          <h3 className="title" id="table-description">
            A selection of websites from the Manawatu region and their average Lighthouse scores.
            <span className="detail">Based on data taken during July 2021</span>
          </h3>

          <LighthouseScoresWrapper>
            <div>
              <p>
                Accessibility
                <br /> {accessiblityData}%
              </p>
              <canvas
                id="accessibilityChart"
                width="auto"
                height="auto"
                // title={`Average accessibility scrore ${accessiblityData}%`}
              ></canvas>
            </div>

            <div>
              <p>
                SEO <br /> {seoData}%
              </p>
              <canvas
                id="seoChart"
                width="auto"
                height="auto"
                title={`Average SEO scrore ${seoData}%`}
              ></canvas>
            </div>

            <div>
              <p>
                Performance <br /> {performanceData}%
              </p>
              <canvas
                id="performmanceChart"
                width="auto"
                height="auto"
                title={`Average performance scrore ${performanceData}%`}
              ></canvas>
            </div>

            <div>
              <p>
                Best practice <br /> {bestPracticeData}%
              </p>
              <canvas
                id="bestPracticeChart"
                width="auto"
                height="auto"
                title={`Average best practice scrore ${bestPracticeData}%`}
              ></canvas>
            </div>
          </LighthouseScoresWrapper>

          <p className="title">The breakdown</p>
          <div className="tableWrapper">
            <ReactTable
              // data={tableData.edges.map((score) => {

              data={tableData.edges
                .filter((row) => row.node.url !== null)
                .filter((row) => row.node.url.includes('.'))
                .filter((row) => row.node.accessiblity !== null)
                .filter((row) => row.node.seo !== null)
                .filter((row) => row.node.bestPactice !== null)
                .map((score) => {
                  // if (score.node.url === null) return {}
                  // if (score.node.url === null) {
                  //   score.remove()
                  // }
                  return {
                    url: (
                      <a onKeyDown={keyEscape} href={score.node.url}>
                        {score.node.url}
                      </a>
                    ),
                    secure: score.node.secure,
                    responsive: score.node.responsive,
                    pwa: score.node.pwa,
                    errors: score.node.noErrors,
                    accessiblity: score.node.accessiblity + '%',
                    seo: score.node.seo + '%',
                    performance: score.node.performance + '%',
                    bestPractice: score.node.bestPractice + '%',
                  }
                })}
              columns={columns}
              minRows={0}
              defaultPageSize={10}
              getCellProps={(cellInfo) => ({
                className:
                  (cellInfo.value === 'FALSE' && 'red') || (cellInfo.value === 'TRUE' && 'green'),

                // 'aria-label':
                //   (cellInfo.value === 'FALSE' && 'False') || (cellInfo.value === 'TRUE' && 'True'),
              })}
            />
          </div>
        </LighthouseScoresTableWrapper>
      </div>
    </Section>
  )
}

export default LighthouseScores
