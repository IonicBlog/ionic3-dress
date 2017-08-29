import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

@NgModule({
    declarations: [
        ContactPage,
    ],
    imports: [
        IonicPageModule.forChild(ContactPage),ComponentsModule
    ],
})
export class ContactPageModule { }
