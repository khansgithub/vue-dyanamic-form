<template>
    <div>
        <fieldset name="order">
            <component v-for="(fieldProperties, field) in props.schema.order"
                :key="field"
                :is='getComponent(fieldProperties.element)'
                :properties=fieldProperties
                name_prefix="order"
                :field_name="field"
            >
            </component>
        </fieldset>
        <fieldset name="product">
            <template v-for=" properties_field in props.schema.properties">
                <component v-for="(fieldProperties, field) in properties_field"
                :key="field"
                :is='getComponent(fieldProperties.element)'
                :properties=fieldProperties
                name_prefix="products"
                :field_name="field"
                >
                </component>
            </template>
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
    return componentMap[componentName];
}
</script>

