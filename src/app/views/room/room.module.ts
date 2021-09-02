import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EditIconModule } from 'src/app/shared/components/edit-icon/edit-icon.module';
import { DeleteIconModule } from 'src/app/shared/components/delete-icon/delete-icon.module';
import { NoConnectionModule } from 'src/app/shared/components/no-connection/no-connection.module';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RoomUpdateComponent } from './room-update/room-update.component';
import { RoomDeleteComponent } from './room-delete/room-delete.component';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';

@NgModule({
    declarations: [
        RoomListComponent,
        RoomCreateComponent,
        RoomUpdateComponent,
        RoomDeleteComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        EditIconModule,
        DeleteIconModule,
        AlertModule,
        NoConnectionModule,
        RouterModule.forChild([
            {
                path: 'room', component: RoomListComponent
            },
            {
                path: 'room/create', component: RoomCreateComponent
            },
            {
                path: 'room/update/:id', component: RoomUpdateComponent
            },
            {
                path: 'room/delete/:id', component: RoomDeleteComponent
            }, 
            {
                path:'**', redirectTo: 'room', pathMatch: 'full'
            }
        ])
    ]
})
export class RoomModule { 

}