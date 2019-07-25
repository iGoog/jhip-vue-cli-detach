<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhiprelApp.rowRecord.home.createOrEditLabel">Create or edit a RowRecord</h2>
                <div>
                    <div class="form-group" v-if="rowRecord.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="rowRecord.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-detail">Detail</label>
                        <input type="text" class="form-control" name="detail" id="row-record-detail"
                            :class="{'valid': !$v.rowRecord.detail.$invalid, 'invalid': $v.rowRecord.detail.$invalid }" v-model="$v.rowRecord.detail.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-longDemo">Long Demo</label>
                        <input type="number" class="form-control" name="longDemo" id="row-record-longDemo"
                            :class="{'valid': !$v.rowRecord.longDemo.$invalid, 'invalid': $v.rowRecord.longDemo.$invalid }" v-model.number="$v.rowRecord.longDemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-bigDecimaldemo">Big Decimaldemo</label>
                        <input type="number" class="form-control" name="bigDecimaldemo" id="row-record-bigDecimaldemo"
                            :class="{'valid': !$v.rowRecord.bigDecimaldemo.$invalid, 'invalid': $v.rowRecord.bigDecimaldemo.$invalid }" v-model.number="$v.rowRecord.bigDecimaldemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-floatDemo">Float Demo</label>
                        <input type="number" class="form-control" name="floatDemo" id="row-record-floatDemo"
                            :class="{'valid': !$v.rowRecord.floatDemo.$invalid, 'invalid': $v.rowRecord.floatDemo.$invalid }" v-model.number="$v.rowRecord.floatDemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-doubleDemo">Double Demo</label>
                        <input type="number" class="form-control" name="doubleDemo" id="row-record-doubleDemo"
                            :class="{'valid': !$v.rowRecord.doubleDemo.$invalid, 'invalid': $v.rowRecord.doubleDemo.$invalid }" v-model.number="$v.rowRecord.doubleDemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-booleanDemo">Boolean Demo</label>
                        <input type="checkbox" class="form-check" name="booleanDemo" id="row-record-booleanDemo"
                            :class="{'valid': !$v.rowRecord.booleanDemo.$invalid, 'invalid': $v.rowRecord.booleanDemo.$invalid }" v-model="$v.rowRecord.booleanDemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-localDataDemo">Local Data Demo</label>
                        <div class="input-group">
                            <input id="row-record-localDataDemo" type="date" class="form-control" name="localDataDemo"  :class="{'valid': !$v.rowRecord.localDataDemo.$invalid, 'invalid': $v.rowRecord.localDataDemo.$invalid }"
                            v-model="$v.rowRecord.localDataDemo.$model"  />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-zonedDateTimeDemo">Zoned Date Time Demo</label>
                        <div class="d-flex">
                            <input id="row-record-zonedDateTimeDemo" type="datetime-local" class="form-control" name="zonedDateTimeDemo" :class="{'valid': !$v.rowRecord.zonedDateTimeDemo.$invalid, 'invalid': $v.rowRecord.zonedDateTimeDemo.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.rowRecord.zonedDateTimeDemo.$model)"
                            @change="updateZonedDateTimeField('zonedDateTimeDemo', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-durationDemo">Duration Demo</label>
                        <input type="number" class="form-control" name="durationDemo" id="row-record-durationDemo"
                            :class="{'valid': !$v.rowRecord.durationDemo.$invalid, 'invalid': $v.rowRecord.durationDemo.$invalid }" v-model.number="$v.rowRecord.durationDemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-uuidDemo">Uuid Demo</label>
                        <input type="text" class="form-control" name="uuidDemo" id="row-record-uuidDemo"
                            :class="{'valid': !$v.rowRecord.uuidDemo.$invalid, 'invalid': $v.rowRecord.uuidDemo.$invalid }" v-model="$v.rowRecord.uuidDemo.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-blobDemo">Blob Demo</label>
                        <div>
                            <div v-if="rowRecord.blobDemo" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(rowRecord.blobDemoContentType, rowRecord.blobDemo)">open</a><br>
                                <span class="pull-left">{{rowRecord.blobDemoContentType}}, {{byteSize(rowRecord.blobDemo)}}</span>
                                <button type="button" v-on:click="rowRecord.blobDemo=null;rowRecord.blobDemoContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_blobDemo" id="file_blobDemo" v-on:change="setFileData($event, rowRecord, 'blobDemo', false)"/>
                        </div>
                        <input type="hidden" class="form-control" name="blobDemo" id="row-record-blobDemo"
                            :class="{'valid': !$v.rowRecord.blobDemo.$invalid, 'invalid': $v.rowRecord.blobDemo.$invalid }" v-model="$v.rowRecord.blobDemo.$model" />
                        <input type="hidden" class="form-control" name="blobDemoContentType" id="row-record-blobDemoContentType"
                            v-model="rowRecord.blobDemoContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-anyBlobDemo">Any Blob Demo</label>
                        <div>
                            <div v-if="rowRecord.anyBlobDemo" class="form-text text-danger clearfix">
                                <a class="pull-left" v-on:click="openFile(rowRecord.anyBlobDemoContentType, rowRecord.anyBlobDemo)">open</a><br>
                                <span class="pull-left">{{rowRecord.anyBlobDemoContentType}}, {{byteSize(rowRecord.anyBlobDemo)}}</span>
                                <button type="button" v-on:click="rowRecord.anyBlobDemo=null;rowRecord.anyBlobDemoContentType=null;"
                                        class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_anyBlobDemo" id="file_anyBlobDemo" v-on:change="setFileData($event, rowRecord, 'anyBlobDemo', false)"/>
                        </div>
                        <input type="hidden" class="form-control" name="anyBlobDemo" id="row-record-anyBlobDemo"
                            :class="{'valid': !$v.rowRecord.anyBlobDemo.$invalid, 'invalid': $v.rowRecord.anyBlobDemo.$invalid }" v-model="$v.rowRecord.anyBlobDemo.$model" />
                        <input type="hidden" class="form-control" name="anyBlobDemoContentType" id="row-record-anyBlobDemoContentType"
                            v-model="rowRecord.anyBlobDemoContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-imageBlobDemo">Image Blob Demo</label>
                        <div>
                            <img v-bind:src="'data:' + rowRecord.imageBlobDemoContentType + ';base64,' + rowRecord.imageBlobDemo" style="max-height: 100px;" v-if="rowRecord.imageBlobDemo" alt="rowRecord image"/>
                            <div v-if="rowRecord.imageBlobDemo" class="form-text text-danger clearfix">
                                <span class="pull-left">{{rowRecord.imageBlobDemoContentType}}, {{byteSize(rowRecord.imageBlobDemo)}}</span>
                                <button type="button" v-on:click="clearInputImage('imageBlobDemo', 'imageBlobDemoContentType', 'file_imageBlobDemo')" class="btn btn-secondary btn-xs pull-right">
                                    <font-awesome-icon icon="times"></font-awesome-icon>
                                </button>
                            </div>
                            <input type="file" ref="file_imageBlobDemo" id="file_imageBlobDemo" v-on:change="setFileData($event, rowRecord, 'imageBlobDemo', true)" accept="image/*"/>
                        </div>
                        <input type="hidden" class="form-control" name="imageBlobDemo" id="row-record-imageBlobDemo"
                            :class="{'valid': !$v.rowRecord.imageBlobDemo.$invalid, 'invalid': $v.rowRecord.imageBlobDemo.$invalid }" v-model="$v.rowRecord.imageBlobDemo.$model" />
                        <input type="hidden" class="form-control" name="imageBlobDemoContentType" id="row-record-imageBlobDemoContentType"
                            v-model="rowRecord.imageBlobDemoContentType" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-textBlobDemo">Text Blob Demo</label>
                        <textarea class="form-control" name="textBlobDemo" id="row-record-textBlobDemo"
                            :class="{'valid': !$v.rowRecord.textBlobDemo.$invalid, 'invalid': $v.rowRecord.textBlobDemo.$invalid }" v-model="$v.rowRecord.textBlobDemo.$model" ></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-instantDemo">Instant Demo</label>
                        <div class="d-flex">
                            <input id="row-record-instantDemo" type="datetime-local" class="form-control" name="instantDemo" :class="{'valid': !$v.rowRecord.instantDemo.$invalid, 'invalid': $v.rowRecord.instantDemo.$invalid }"
                            
                            :value="convertDateTimeFromServer($v.rowRecord.instantDemo.$model)"
                            @change="updateInstantField('instantDemo', $event)"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-extra">Extra</label>
                        <select class="form-control" id="row-record-extra" name="extra" v-model="rowRecord.extra">
                            <option v-bind:value="null"></option>
                            <option v-bind:value="rowRecord.extra && rowRecordExtraOption.id === rowRecord.extra.id ? rowRecord.extra : rowRecordExtraOption" v-for="rowRecordExtraOption in rowRecordExtras" :key="rowRecordExtraOption.id">{{rowRecordExtraOption.id}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label"  for="row-record-record">Record</label>
                        <select class="form-control" id="row-record-record" name="record" v-model="rowRecord.record" required>
                            <option v-if="!rowRecord.record" v-bind:value="null" selected></option>
                            <option v-bind:value="rowRecord.record && topRecordOption.id === rowRecord.record.id ? rowRecord.record : topRecordOption" v-for="topRecordOption in topRecords" :key="topRecordOption.id">{{topRecordOption.refNo}}</option>
                        </select>
                    </div>
                    <div v-if="$v.rowRecord.record.$anyDirty && $v.rowRecord.record.$invalid">
                        <small class="form-text text-danger" v-if="!$v.rowRecord.record.required">
                            This field is required.
                        </small>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.rowRecord.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./row-record-update.component.ts">
</script>
