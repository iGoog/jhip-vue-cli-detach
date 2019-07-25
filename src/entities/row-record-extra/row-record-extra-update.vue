<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhiprelApp.rowRecordExtra.home.createOrEditLabel">Create or edit a RowRecordExtra</h2>
                <div>
                    <div class="form-group" v-if="rowRecordExtra.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="rowRecordExtra.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-extra-detail">Detail</label>
                        <input type="text" class="form-control" name="detail" id="row-record-extra-detail"
                            :class="{'valid': !$v.rowRecordExtra.detail.$invalid, 'invalid': $v.rowRecordExtra.detail.$invalid }" v-model="$v.rowRecordExtra.detail.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-extra-cash">Cash</label>
                        <input type="number" class="form-control" name="cash" id="row-record-extra-cash"
                            :class="{'valid': !$v.rowRecordExtra.cash.$invalid, 'invalid': $v.rowRecordExtra.cash.$invalid }" v-model.number="$v.rowRecordExtra.cash.$model" />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="row-record-extra-due">Due</label>
                        <div class="input-group">
                            <input id="row-record-extra-due" type="date" class="form-control" name="due"  :class="{'valid': !$v.rowRecordExtra.due.$invalid, 'invalid': $v.rowRecordExtra.due.$invalid }"
                            v-model="$v.rowRecordExtra.due.$model"  />
                        </div>
                    </div>
                    <div v-if="$v.rowRecordExtra.rowr.$anyDirty && $v.rowRecordExtra.rowr.$invalid">
                        <small class="form-text text-danger" v-if="!$v.rowRecordExtra.rowr.required">
                            This field is required.
                        </small>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.rowRecordExtra.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./row-record-extra-update.component.ts">
</script>
