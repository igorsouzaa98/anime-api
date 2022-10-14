import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AnimeApiService } from 'src/app/service/anime-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlAnime: string = 'https://kitsu.io/api/edge/anime/';

  public anime: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private animeApiService: AnimeApiService
  ) {}

  ngOnInit(): void {
    this.getAnimes;
  }

  get getAnimes() {
    const id = this.activatedRoute.snapshot.params['id'];
    const anime = this.animeApiService.apiGetAnimes(`${this.urlAnime}/${id}`);
    return forkJoin(anime).subscribe((res) => {
      this.anime = res;
      console.log(res);
    });
  }
}
