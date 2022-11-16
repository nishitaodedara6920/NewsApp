import { NewsService } from './news.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'NewsProject';
  sources: any = [];
  articles:any = [];
  toggle = true;
  color = true;
  button = true;
  btn = true;
status = 'Enable';
  selectedNewsChannel: string="Top Trending News!";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  ngOnInit(): void {
    this.newsApi.initArticles().subscribe((res:any)=>{
      console.log(res);
      this.articles = res.articles;
    })
    this.newsApi.initSources().subscribe((res:any)=>{
      console.log(res);
      this.sources = res.sources;
    })

  }
  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef, private newsApi : NewsService){

  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)'])
    .subscribe((res)=>{
      if(res?.matches){
        this.sideNav.mode="over";
        this.sideNav.close();
      }else{
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    })
    this.cd.detectChanges();
  }
  searchSource(source:any){
    this.newsApi.getArticlesByID(source.id)
    .subscribe((res:any)=>{
      this.selectedNewsChannel = source.name
      this.articles = res.articles;
    })
  }
  saveit() {
    let url = 'https://en.wikipedia.org/wiki/Yoga';
    window.open(url, '_blank');
  
  }
  viewit() {
    let url = 'https://mediahub.unl.edu/media/19164';
    window.open(url, '_blank');
  
  }
  appearit() {
    let url = 'https://www.britannica.com/art/rhythm-music';
    window.open(url, '_blank');
  
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  enableDisable() {
    this.color = !this.color;
    this.status = this.color ? 'Enable' : 'Disable';
  }
  enableDisable1() {
    this.button = !this.button;
    this.status = this.button ? 'Enable' : 'Disable';
  }
  enableDisable2() {
    this.btn = !this.btn;
    this.status = this.btn ? 'Enable' : 'Disable';
  }
}