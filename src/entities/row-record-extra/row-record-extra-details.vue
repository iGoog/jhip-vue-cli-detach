<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="rowRecordExtra">
                <h2 class="jh-entity-heading"><span>RowRecordExtra</span> {{rowRecordExtra.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>Detail</span>
                    </dt>
                    <dd>
                        <span>{{rowRecordExtra.detail}}</span>
                    </dd>
                    <dt>
                        <span>Cash</span>
                    </dt>
                    <dd>
                        <span>{{rowRecordExtra.cash}}</span>
                    </dd>
                    <dt>
                        <span>Due</span>
                    </dt>
                    <dd>
                        <span>{{rowRecordExtra.due}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="rowRecordExtra.id" :to="{name: 'RowRecordExtraEdit', params: {rowRecordExtraId: rowRecordExtra.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./row-record-extra-details.component.ts">
</script>
