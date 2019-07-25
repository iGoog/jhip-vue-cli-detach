<template>
    <div>
        <h2 id="page-heading">
            <span id="row-record-heading">Row Records WOOOT?</span>
            <router-link :to="{name: 'RowRecordCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-row-record">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create new RowRecord
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
        <div class="alert alert-warning" v-if="!isFetching && rowRecords && rowRecords.length === 0">
            <span>No rowRecords found</span>
        </div>
        <div class="table-responsive" v-if="rowRecords && rowRecords.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-on:click="changeOrder('id')"><span>ID</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('detail')"><span>Detail</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('longDemo')"><span>Long Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('bigDecimaldemo')"><span>Big Decimaldemo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('floatDemo')"><span>Float Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('doubleDemo')"><span>Double Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('booleanDemo')"><span>Boolean Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('localDataDemo')"><span>Local Data Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('zonedDateTimeDemo')"><span>Zoned Date Time Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('durationDemo')"><span>Duration Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('uuidDemo')"><span>Uuid Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('blobDemo')"><span>Blob Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('anyBlobDemo')"><span>Any Blob Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('imageBlobDemo')"><span>Image Blob Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('textBlobDemo')"><span>Text Blob Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('instantDemo')"><span>Instant Demo</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('extra.id')"><span>Extra</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th v-on:click="changeOrder('record.refNo')"><span>Record</span> <font-awesome-icon icon="sort"></font-awesome-icon></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="rowRecord of orderBy(rowRecords, propOrder, reverse === true ? 1 : -1)"
                    :key="rowRecord.id">
                    <td>
                        <router-link :to="{name: 'RowRecordView', params: {rowRecordId: rowRecord.id}}">{{rowRecord.id}}</router-link>
                    </td>
                    <td>{{rowRecord.detail}}</td>
                    <td>{{rowRecord.longDemo}}</td>
                    <td>{{rowRecord.bigDecimaldemo}}</td>
                    <td>{{rowRecord.floatDemo}}</td>
                    <td>{{rowRecord.doubleDemo}}</td>
                    <td>{{rowRecord.booleanDemo}}</td>
                    <td>{{rowRecord.localDataDemo}}</td>
                    <td>{{rowRecord.zonedDateTimeDemo | formatDate}}</td>
                    <td>{{rowRecord.durationDemo}}</td>
                    <td>{{rowRecord.uuidDemo}}</td>
                    <td>
                        <a v-if="rowRecord.blobDemo" v-on:click="openFile(rowRecord.blobDemoContentType, rowRecord.blobDemo)">open</a>
                        <span v-if="rowRecord.blobDemo">{{rowRecord.blobDemoContentType}}, {{byteSize(rowRecord.blobDemo)}}</span>
                    </td>
                    <td>
                        <a v-if="rowRecord.anyBlobDemo" v-on:click="openFile(rowRecord.anyBlobDemoContentType, rowRecord.anyBlobDemo)">open</a>
                        <span v-if="rowRecord.anyBlobDemo">{{rowRecord.anyBlobDemoContentType}}, {{byteSize(rowRecord.anyBlobDemo)}}</span>
                    </td>
                    <td>
                        <a v-if="rowRecord.imageBlobDemo" v-on:click="openFile(rowRecord.imageBlobDemoContentType, rowRecord.imageBlobDemo)">
                            <img v-bind:src="'data:' + rowRecord.imageBlobDemoContentType + ';base64,' + rowRecord.imageBlobDemo" style="max-height: 30px;" alt="rowRecord image"/>
                        </a>
                        <span v-if="rowRecord.imageBlobDemo">{{rowRecord.imageBlobDemoContentType}}, {{byteSize(rowRecord.imageBlobDemo)}}</span>
                    </td>
                    <td>{{rowRecord.textBlobDemo}}</td>
                    <td>{{rowRecord.instantDemo | formatDate}}</td>
                    <td>
                        <div v-if="rowRecord.extra">
                            <router-link :to="{name: 'RowRecordExtraView', params: {rowRecordExtraId: rowRecord.extra.id}}">{{rowRecord.extra.id}}</router-link>
                        </div>
                    </td>
                    <td>
                        <div v-if="rowRecord.record">
                            <router-link :to="{name: 'TopRecordView', params: {topRecordId: rowRecord.record.id}}">{{rowRecord.record.refNo}}</router-link>
                        </div>
                    </td>
                    <td class="text-right">
                        <div class="btn-group flex-btn-group-container">
                            <router-link :to="{name: 'RowRecordView', params: {rowRecordId: rowRecord.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'RowRecordEdit', params: {rowRecordId: rowRecord.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(rowRecord)"
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
            <span slot="modal-title"><span id="jhiprelApp.rowRecord.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-rowRecord-heading" >Are you sure you want to delete this Row Record?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-rowRecord" v-on:click="removeRowRecord()">Delete</button>
            </div>
        </b-modal>
        <div v-if="rowRecords && rowRecords.length">
            <div class="row justify-content-center">
                <jhi-item-count :page="page" :total="queryCount" :itemsPerPage="itemsPerPage"></jhi-item-count>
            </div>
            <div class="row justify-content-center">
                <b-pagination size="md" :total-rows="totalItems" v-model="page" :per-page="itemsPerPage" :change="loadPage(page)"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./row-record.component.ts">
</script>
