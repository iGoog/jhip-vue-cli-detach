<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="jhiprelApp.topRecord.home.createOrEditLabel">Create or edit a TopRecord</h2>
                <div>
                    <div class="form-group" v-if="topRecord.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="topRecord.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="top-record-refNo">Ref No</label>
                        <input type="number" class="form-control" name="refNo" id="top-record-refNo"
                            :class="{'valid': !$v.topRecord.refNo.$invalid, 'invalid': $v.topRecord.refNo.$invalid }" v-model.number="$v.topRecord.refNo.$model" />
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.topRecord.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./top-record-update.component.ts">
</script>
