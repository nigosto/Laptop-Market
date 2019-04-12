import { NgModule } from "@angular/core";
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule} from '@angular/material'

@NgModule({
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatCardModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatCardModule,
        MatIconModule
    ]
})
export class MaterialModule { }