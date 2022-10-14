import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeApiService {
  private url: string =
    'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=20';
  constructor(private http: HttpClient) {}

  get apiListAllAnimes(): Observable<any> {
    return this.http.get<any>(this.url).pipe(tap((res) => res));
  }

  public apiGetAnimes(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
