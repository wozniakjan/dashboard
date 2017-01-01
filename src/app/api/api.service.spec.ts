/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { ApiService } from "./api.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Auth} from "../auth/auth.service";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";
import {combinedReducer} from "../reducers/index";

describe("ApiService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpModule,
        RouterTestingModule,
        StoreModule.provideStore(combinedReducer)
      ],
      declarations: [
      ],
      providers: [
        Auth,
        ApiService,
      ],
    }).compileComponents();
  });


  it("should ...", inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
