<template>
    <div>
        <h2 id="page-heading">
            <span id="row-record-extra-heading">Row Record Extras</span>
            <router-link :to="{name: 'RowRecordExtraCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-row-record-extra">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create new RowRecordExtra
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && rowRecordExtras && rowRecordExtras.length === 0">
            <span>No rowRecordExtras found</span>
        </div>
        <div class="table-responsive" v-if="rowRecordExtras && rowRecordExtras.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>Detail</span></th>
                    <th><span>Cash</span></th>
                    <th><span>Due</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="rowRecordExtra in rowRecordExtras"
                    :key="rowRecordExtra.id">
                    <td>
                        <router-link :to="{name: 'RowRecordExtraView', params: {rowRecordExtraId: rowRecordExtra.id}}">{{rowRecordExtra.id}}</router-link>
                    </td>
                    <td>{{rowRecordExtra.detail}}</td>
                    <td>{{rowRecordExtra.cash}}</td>
                    <td>{{rowRecordExtra.due}}</td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'RowRecordExtraView', params: {rowRecordExtraId: rowRecordExtra.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'RowRecordExtraEdit', params: {rowRecordExtraId: rowRecordExtra.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(rowRecordExtra)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="jhiprelApp.rowRecordExtra.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-rowRecordExtra-heading" >Are you sure you want to delete this Row Record Extra?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-rowRecordExtra" v-on:click="removeRowRecordExtra()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./row-record-extra.component.ts">
</script>
