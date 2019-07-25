<template>
    <div>
        <h2 id="page-heading">
            <span id="top-record-heading">Top Records</span>
            <router-link :to="{name: 'TopRecordCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-top-record">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create new TopRecord
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
        <div class="alert alert-warning" v-if="!isFetching && topRecords && topRecords.length === 0">
            <span>No topRecords found</span>
        </div>
        <div class="table-responsive" v-if="topRecords && topRecords.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>Ref No</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="topRecord in topRecords"
                    :key="topRecord.id">
                    <td>
                        <router-link :to="{name: 'TopRecordView', params: {topRecordId: topRecord.id}}">{{topRecord.id}}</router-link>
                    </td>
                    <td>{{topRecord.refNo}}</td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'TopRecordView', params: {topRecordId: topRecord.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'TopRecordEdit', params: {topRecordId: topRecord.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(topRecord)"
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
            <span slot="modal-title"><span id="jhiprelApp.topRecord.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-topRecord-heading" >Are you sure you want to delete this Top Record?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-topRecord" v-on:click="removeTopRecord()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./top-record.component.ts">
</script>
