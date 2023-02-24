import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIngEgrComponent } from './list-ing-egr/list-ing-egr.component';

import { TransactionRoutingModule } from './transaction-routing.module';
import { ListEgresosComponent } from './list-egresos/list-egresos.component';
import { ListIngresosComponent } from './list-ingresos/list-ingresos.component';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from "../../shared/shared.module";
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        ListIngEgrComponent,
        ListEgresosComponent,
        ListIngresosComponent
    ],
    imports: [
        CommonModule,
        TransactionRoutingModule,
        MatButtonModule,
        SharedModule,
        MatIconModule,
        MatSelectModule
    ]
})
export class TransactionModule { }
