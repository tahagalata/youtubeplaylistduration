import React from 'react'
import './video.scss'

export default function Video() {
  return (
    <div className="video">
      <div 
        className="video-thumb"
        style={{
          backgroundImage: 'url("https://i.ytimg.com/vi/DJ7DoGoU9E0/mqdefault.jpg")'
        }}
      >
      </div>
      <div>
      <p className="video-title">Lineer Cebir : Lineer Denklem Sistemleri ve Matrisler ile Gösterimi (www.buders.com)</p>
      <p className="video-channel">BUders Boğaziçiliden Özel Ders</p>
      </div>
    </div>
  )
}