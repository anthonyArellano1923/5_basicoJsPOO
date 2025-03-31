function reproducirVideo(id) {
  const url = `https://secretvideo.com/&%` + id
  console.log(`Se está reproduciendo ${url}`)
}

function pausarVideo(id) {
  const url = `https://secretvideo.com/&%` + id
  console.log(`Se pausó la reproducción de ${url}`)
}

export class PlatziClass {
  constructor({
    name,
    videoId
  }) {
    this._name = name
    this._videoId = videoId
  }

  get name() { return this._name }
  get videoId() { return this._videoId }

  set name(name) { this._name = name}
  set videoId(videoId) { this._videoId = videoId}

    reproducir() {
      reproducirVideo(this._videoId)
    }

    pausar() {
      pausarVideo(this._videoId)
    }

}