import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { FormControl } from '@angular/forms';
import { pairwise, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  texx: FormControl = new FormControl();
  currentVal: String = '';

  constructor() { }

  ngOnInit() {
    this.product = new Product(1, 'Angular', 3800, 'gone');
    this.texx.valueChanges
      .subscribe(v=> {
        // TODO 前に値を戻した時に次入力時のprevがaa担っている
        if (v && 10 <= v.length) {
          this.texx.setValue(this.currentVal, {'emitEvent': false});
        } else {
          this.currentVal = v;
        }
      });
  }

  inp(val) {
    //this.texx = val;
    console.log('texx:'+this.texx);
    console.log('val:'+val);
    // TODO 過去の値を取得する方法を見つける
    // TODO 最新の値のbyteをみて規定値以上なら過去の値にもどす
    if (val === 'a') {
      this.texx.setValue('');
    }
  }
}
