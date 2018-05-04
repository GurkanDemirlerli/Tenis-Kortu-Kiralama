import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from '../../../providers';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'ngx-randevularim',
  styleUrls: ['./randevularim.component.scss'],
  templateUrl: './randevularim.component.html',
})
export class RandevularimComponent implements OnInit {
  user;
  randevular = [];



  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      tarih: {
        title: 'Tarih',
        type: 'string',
      },
      tutar: {
        title: 'Tutar',
        type: 'string',
      },
      islemTuru: {
        title: 'İşlem Türü',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();



  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.userService.getRandevular(this.user.uid).valueChanges().subscribe((randevular) => {
        randevular.forEach(randevu => {
          randevu.tutar = "100₺";
          randevu.tarih = randevu.tarih + " , " + randevu.saat;
        });
        this.randevular = randevular;
        this.source.load(randevular);
        console.log(this.randevular);
      });
    });
  }
}
