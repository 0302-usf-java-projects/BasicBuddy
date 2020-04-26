import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './image-upload.component';
import { HttpClientModule } from '@angular/common/http';

import { ImageService } from 'src/app/services/image.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        ImageService
    ],
    exports: [
       ImageUploadComponent
    ],
    declarations: [
       ImageUploadComponent
    ]
})
export class ImageUploadModule {


}
