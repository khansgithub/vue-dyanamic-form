<template lang="pug">
div.col-10
    template(v-if="inputType=='text'")
        input.form-control(type="text" :name="forValue" :placeholder="props.field_name")

    template(v-if="inputType=='checkbox'")
        .form-check 
            label.form-check-label(:for="forValue") "field_data.text"
            input.form-check-input(type="checkbox" :id="for_value" :name="for_value")

    template(v-if="inputType=='radio'")
        .form-check
            label.form-check-label(:for="for_value + '- option.name'") "option.name"
            input.form-check-input.p-0(type="radio" :name=for_value :id="for_value +'- option.name'" value="option.value")

    template(v-if="inputType=='number'")
        input.form-control(type="number" :placeholder="field_name" :name="for_value" max="field_data.max" min="field_data.min")


</template>

<!----- SCRIPT ---------------------------------------------------------------->
<script setup lang="ts">
import type { PropType } from 'vue';
import { ref } from 'vue'

import type { UISchemaProperty } from '../types/ui-schema';

const props = defineProps({
    properties: Object as PropType<UISchemaProperty>,
    name_prefix: String,
    field_name: String
})

const inputType = ref("")
const forValue = `${props.name_prefix}-${props.field_name}`


inputType.value = props.properties.type

console.log(inputType)

// const x = {
//     "text": ref(false),
//     "checkbox": ref(false),
//     "radio": ref(false),
//     "number": ref(false)
// }

// switch (props.properties.type){
//     case "text":
//     case "checkbox":
//     case "radio":
//     case "number":
    
// }


</script>