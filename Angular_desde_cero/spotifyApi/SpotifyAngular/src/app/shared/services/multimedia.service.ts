import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.models';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement // identifica archivos de audio el signo ! indica que no se inicializa
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        console.log('🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍', responseOK)
        this.setAudio(responseOK)
      }

    })
    this.listenAllEvent() // se llama a funcuion definida


  }

  private listenAllEvent(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  // funciones para escuchar eventos de playeng, play, paused, ended
  // esta funcion captura los eventos.
  private setPlayerStatus = (state: any) => {
    console.log('😒😒😒', state)
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        break
      default:
        this.playerStatus$.next('paused')
        break;
    }

  }

  // esta es una funcion de flecha. porque el addEventListener pide como segundo parametro yb arrow
  private calculateTime = () => {
    console.log('Disparando evento')
    const { duration, currentTime } = this.audio
    console.table([duration, currentTime]) // para ver en la consola como tabla los datos
    this.setTimeElapsed(currentTime)
    this.setRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setPercentage(currentTime: number, duration: number): void {
    // duration: 100%. currentTime es lo calcularemos %
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage)

  }


  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) // retorna volor entero de la div entre 60 (segundos)
    let minutes = Math.floor((currentTime / 60) % 60) // nos retorna los minutos
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds; //
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes; //
    const displayFormat = `${displayMinutes} : ${displaySeconds}`
    this.timeElapsed$.next(displayFormat) // envia los tiempos formateados.
  }

  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60) // retorna volor entero de la div entre 60 (segundos)
    let minutes = Math.floor((timeLeft / 60) % 60) // nos retorna los minutos
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds; //
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes; //
    const displayFormat = `-${displayMinutes} : ${displaySeconds}`
    this.timeRemaining$.next(displayFormat) // envia los tiempos formateados.

  }

  // definimos la funcion publica audio
  public setAudio(track: TrackModel): void {
    console.log('🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍', track.url);
    this.audio.src = track.url
    this.audio.play()

  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio
    console.log(`Duration : ${duration} ,Percentage : ${percentage} `);
    // 100% ----> duration
    // 70% -----> x
    //indica a cuanto equivale el porcentaje que se indica de una cancion
    const percentageToSecond = (percentage * duration) / 100
    console.log(percentageToSecond)
    this.audio.currentTime = percentageToSecond
  }

}










