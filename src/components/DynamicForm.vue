<template>
    <div>
        <fieldset name="order">
            <!-- <div v-for="(fieldProperties, field) in schema.order" :key="field">
                <label>{{ field }}</label>
                <component :is='getComponent(fieldProperties.element)' :properties=fieldProperties>
                </component>
                    <label for="order_{{ field }}">{{ field }}</label>
            </div> -->
            <component v-for="(fieldProperties, field) in schema.order" :key="field" :is='getComponent(fieldProperties.element)' :properties=fieldProperties>
            </component>
        </fieldset>
        <fieldset name="product">

        </fieldset>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { UISchema } from '../types/ui-schema';
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'

const props = defineProps({
    schema: Object as PropType<UISchema>
})

const componentMap = {
    "input": FormInput,
    "select": FormSelect
}

function getComponent(componentName: string): FormInput|FormSelect {
    console.log(componentName);
    return componentMap[componentName];
}

console.log(props.schema)
</script>

<script lang="ts">
console.log(this)
</script>
