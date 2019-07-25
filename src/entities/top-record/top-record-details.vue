<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="topRecord">
                <h2 class="jh-entity-heading"><span>TopRecord</span> {{topRecord.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>Ref No</span>
                    </dt>
                    <dd>
                        <span>{{topRecord.refNo}}</span>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="topRecord.id" :to="{name: 'TopRecordEdit', params: {topRecordId: topRecord.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./top-record-details.component.ts">
</script>
