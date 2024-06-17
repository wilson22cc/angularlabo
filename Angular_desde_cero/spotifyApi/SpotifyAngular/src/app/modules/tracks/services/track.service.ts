import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) {
  }
  //este metod es el devuelbe todas las canciones.
  // estas viene como {data [1..2..3..4..]}
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data
      })
    )

  }



  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
        map(({ data }: any) => {
          return data.reverse()
        }), catchError((err) => {
          alert('Error de conexion');
          const { status, statusText } = err;
          console.log('Algo paso revisar', [status, statusText]);
          return of([])
        })
      )

  }

}




