import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { AddIdErrorComponent } from '../add-id-error/add-id-error.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from '../app.component';
import { AppRoutingModule } from '../app-routing.module';

import { CollectionService } from '../shared/collection/collection.service';
import { ConfigService } from '../shared/config/config.service';

import { AddIdSuccessComponent } from '../add-id-success/add-id-success.component';
import { CollectionEditComponent } from '../collection-edit/collection-edit.component';
import { CollectionShareComponent } from '../collection-share/collection-share.component';
import { OrcidUtilService } from '../shared/orcid-util/orcid-util.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PageHomeComponent } from '../page-home/page-home.component';
import { CollectionEmailComponent } from '../collection-email/collection-email.component';

describe('CollectionEditComponent', () => {
  let component: CollectionEditComponent;
  let fixture: ComponentFixture<CollectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddIdSuccessComponent,
        AddIdErrorComponent,
        AppComponent,
        CollectionEditComponent,
        CollectionShareComponent,
        FooterComponent,
        HeaderComponent,
        PageHomeComponent,
        CollectionEmailComponent,
      ],
      imports: [
        Angular2FontawesomeModule,
        RouterTestingModule.withRoutes([]),
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
      ],
      providers: [
        CollectionService,
        ConfigService,
        OrcidUtilService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
