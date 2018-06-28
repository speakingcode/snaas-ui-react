import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'

import './Discography.css'

class Discography extends Component {
  constructor() {
    super()

    this.state = {
      albums: []
    }

    this.fetchDiscog()
  }

  fetchDiscog() {
    fetch('http://snaas-api.herokuapp.com/api/v1/albums')
      .then(resp => resp.json())
      .then(albums =>  {
        console.log(albums)
        this.setState({albums})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Discography">
        {this.state.albums.map(album => {
          let charts = album.peak_chart_positions.reduce((map, chartPos) => {
            map[chartPos.album_chart.chart] = chartPos.position;
            return map;
          }, {})

          return (
            <div className="Album">
              <div className="Album-title-section">
                <div className="Album-title">
                  {album.title}
                </div>
                <div className="Album-artwork">
                  <img src={album.cover_artwork_url} />
                </div>
              </div>
              <div className="Album-info-section">
                <table className="Album-info">
                  <thead>
                    <tr>
                      <th rowspan="2">Details</th>
                      <th colspan="10" className="peak-chart">Peak Chart Positions</th>
                      <th rowspan="2">Sales</th>
                      <th rowspan="2">Certifications</th>
                    </tr>
                    <tr>
                      <th>US</th>
                      <th>US R&B</th>
                      <th>AUS</th>
                      <th>BEL</th>
                      <th>CAN</th>
                      <th>FRA</th>
                      <th>GER</th>
                      <th>NZ</th>
                      <th>SWI</th>
                      <th>UK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>Released: {album.release_date}</li>
                          <li>Label: {album.label}</li>
                          <li>Format: {album.album_formats.map(fmt => (fmt.format + " "))}</li>
                        </ul>
                      </td>
                      <td className="Album-info-chart-position">{charts['US'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['US R&B'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['AUS'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['BEL'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['CAN'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['FRA'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['GER'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['NZ'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['SWI'] || '--'}</td>
                      <td className="Album-info-chart-position">{charts['UK'] || '--'}</td>
                      <td className="Album-info-chart-position">{album.sales}</td>
                      <td><ul> {album.certifications.map(cert => (<li>{`${cert.certifying_body} : ${cert.certification_level}`}</li>))}</ul></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{clear: 'left'}} />
            </div>
          )
        })}
        <Route path="/discography/(:type)" component={Discography}/>
      </div>
    )
  }
}

export { Discography }
