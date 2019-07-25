<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="rowRecord">
                <h2 class="jh-entity-heading"><span>RowRecord</span> {{rowRecord.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>Detail</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.detail}}</span>
                    </dd>
                    <dt>
                        <span>Long Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.longDemo}}</span>
                    </dd>
                    <dt>
                        <span>Big Decimaldemo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.bigDecimaldemo}}</span>
                    </dd>
                    <dt>
                        <span>Float Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.floatDemo}}</span>
                    </dd>
                    <dt>
                        <span>Double Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.doubleDemo}}</span>
                    </dd>
                    <dt>
                        <span>Boolean Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.booleanDemo}}</span>
                    </dd>
                    <dt>
                        <span>Local Data Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.localDataDemo}}</span>
                    </dd>
                    <dt>
                        <span>Zoned Date Time Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.zonedDateTimeDemo | formatDate}}</span>
                    </dd>
                    <dt>
                        <span>Duration Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.durationDemo}}</span>
                    </dd>
                    <dt>
                        <span>Uuid Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.uuidDemo}}</span>
                    </dd>
                    <dt>
                        <span>Blob Demo</span>
                    </dt>
                    <dd>
                        <div v-if="rowRecord.blobDemo">
                            <a v-on:click="openFile(rowRecord.blobDemoContentType, rowRecord.blobDemo)">open</a>
                            {{rowRecord.blobDemoContentType}}, {{byteSize(rowRecord.blobDemo)}}
                        </div>
                    </dd>
                    <dt>
                        <span>Any Blob Demo</span>
                    </dt>
                    <dd>
                        <div v-if="rowRecord.anyBlobDemo">
                            <a v-on:click="openFile(rowRecord.anyBlobDemoContentType, rowRecord.anyBlobDemo)">open</a>
                            {{rowRecord.anyBlobDemoContentType}}, {{byteSize(rowRecord.anyBlobDemo)}}
                        </div>
                    </dd>
                    <dt>
                        <span>Image Blob Demo</span>
                    </dt>
                    <dd>
                        <div v-if="rowRecord.imageBlobDemo">
                            <a v-on:click="openFile(rowRecord.imageBlobDemoContentType, rowRecord.imageBlobDemo)">
                                <img v-bind:src="'data:' + rowRecord.imageBlobDemoContentType + ';base64,' + rowRecord.imageBlobDemo" style="max-width: 100%;" alt="rowRecord image"/>
                            </a>
                            {{rowRecord.imageBlobDemoContentType}}, {{byteSize(rowRecord.imageBlobDemo)}}
                        </div>
                    </dd>
                    <dt>
                        <span>Text Blob Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.textBlobDemo}}</span>
                    </dd>
                    <dt>
                        <span>Instant Demo</span>
                    </dt>
                    <dd>
                        <span>{{rowRecord.instantDemo | formatDate}}</span>
                    </dd>
                    <dt>
                        <span>Extra</span>
                    </dt>
                    <dd>
                        <div v-if="rowRecord.extra">
                            <router-link :to="{name: 'RowRecordExtraView', params: {extraId: rowRecord.extra.id}}">{{rowRecord.extra.id}}</router-link>
                        </div>
                    </dd>
                    <dt>
                        <span>Record</span>
                    </dt>
                    <dd>
                        <div v-if="rowRecord.record">
                            <router-link :to="{name: 'TopRecordView', params: {recordId: rowRecord.record.id}}">{{rowRecord.record.refNo}}</router-link>
                        </div>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="rowRecord.id" :to="{name: 'RowRecordEdit', params: {rowRecordId: rowRecord.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./row-record-details.component.ts">
</script>
