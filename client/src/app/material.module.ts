import { NgModule } from "@angular/core";
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatIconModule, MatTabsModule} from '@angular/material'

@NgModule({
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule
    ]
})
export class MaterialModule { }