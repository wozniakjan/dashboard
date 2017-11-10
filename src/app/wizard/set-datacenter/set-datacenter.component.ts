import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DataCenterEntity} from "../../api/entitiy/DatacenterEntity";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'kubermatic-set-datacenter',
  templateUrl: 'set-datacenter.component.html',
  styleUrls: ['set-datacenter.component.scss']
})
export class SetDatacenterComponent implements OnInit {
  @Input() datacenter: DataCenterEntity[];
  @Input() selectedDatacenter: DataCenterEntity;
  @Output() syncDatacenter =  new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public selectDatacenter(datacenter: DataCenterEntity) {
    this.selectedDatacenter = datacenter;
    this.syncDatacenter.emit(datacenter);
  }
}
