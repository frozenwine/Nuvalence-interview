import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonModule
  ],
  providers: [

  ]
})
export class MaterialModule { }
