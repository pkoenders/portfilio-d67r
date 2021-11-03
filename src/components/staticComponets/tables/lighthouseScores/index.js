import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Chart from 'chart.js/auto'
// import { getRelativePosition } from 'chart.js/helpers'

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
  canvas {
    overflow: visible;
    position: relative;
    z-index: 10;
    width: 160px;
    max-width: 160px;
    max-height: 160px;
  }
`

const LighthouseScoresTableWrapper = styled.div`
  .title {
    padding: ${({ theme }) => theme.padding['1/4']};
    text-align: center;
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
      background-color: #fff;
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
      span {
        text-align: left;
        font-weight: 500;
        display: flex;
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
                  <span>
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
                  </span>
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
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
      },
      {
        Header: 'Responsive',
        accessor: 'responsive',
        Cell: ({ cell: { value } }) =>
          // value === 'TRUE' ? (className) : (className = 'red'),
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
      },

      {
        Header: 'Secure',
        accessor: 'secure', // accessor is the "key" in the data
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
      },

      {
        Header: 'PWA',
        accessor: 'pwa',
        Cell: ({ cell: { value } }) =>
          value === 'TRUE' ? <Icon icon={'done'} /> : <Icon icon={'close'} />,
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
        labels: [`Accessibility ${accessiblityData}%`],
        datasets: [
          {
            // label: 'Accessiblity',
            //
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
        cutout: 52,
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
    }
  }, [accessiblityData])

  // SEO
  useEffect(() => {
    const seoChart = document.getElementById('seoChart')
    const mySeoChart = new Chart(seoChart, {
      type: 'doughnut',
      data: {
        labels: [`SEO ${seoData}%`],
        datasets: [
          {
            // label: 'SEO',
            //
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
        cutout: 52,
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
      mySeoChart.destroy()
    }
  }, [seoData])

  // Performance
  useEffect(() => {
    const performanceChart = document.getElementById('performmanceChart')
    const myPerformanceChart = new Chart(performanceChart, {
      type: 'doughnut',
      data: {
        labels: [`Performance ${performanceData}%`],
        datasets: [
          {
            // label: 'SEO',
            //
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
        cutout: 52,
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
      myPerformanceChart.destroy()
    }
  }, [performanceData])

  // Best practice
  useEffect(() => {
    const bestPracticeChart = document.getElementById('bestPracticeChart')
    const mybestPracticeChart = new Chart(bestPracticeChart, {
      type: 'doughnut',
      data: {
        labels: [`Best practice ${bestPracticeData}%`],
        datasets: [
          {
            // label: 'SEO',
            //
            data: [`${bestPracticeData}`, 100 - `${bestPracticeData}`],

            // backgroundColor: [`#CFE7D6`, `rgba(255, 99, 132, 0.0)`],
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
        cutout: 52,
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
      mybestPracticeChart.destroy()
    }
  }, [bestPracticeData])

  return (
    <Section
      // contentSize={'xl noMarginTop'}
      classOverides={'xl'}
    >
      <LighthouseScoresTableWrapper>
        <p className="title" id="table-description">
          A selection of websites in the Manawatu region and their average lighthouse scores.
        </p>
        {/* <p className="title">Total count: {tableData.totalCount}</p> */}
        <LighthouseScoresWrapper>
          <canvas id="accessibilityChart" width="auto" height="auto"></canvas>
          <canvas id="seoChart"></canvas>
          <canvas id="performmanceChart"></canvas>
          <canvas id="bestPracticeChart"></canvas>
        </LighthouseScoresWrapper>
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
                  url: <a href={score.node.url}>{score.node.url}</a>,
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

              'aria-label':
                (cellInfo.value === 'FALSE' && 'False') || (cellInfo.value === 'TRUE' && 'True'),
            })}
          />
        </div>
      </LighthouseScoresTableWrapper>
    </Section>
  )
}

export default LighthouseScores
