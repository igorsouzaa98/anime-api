import { Component, OnInit } from '@angular/core';
import { AnimeApiService } from 'src/app/service/anime-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public getAllAnimes: any;
  constructor(private animeApiService: AnimeApiService) {}

  ngOnInit(): void {
    this.animeApiService.apiListAllAnimes.subscribe((res) => {
      this.getAllAnimes = res.data;
    });
  }
}
