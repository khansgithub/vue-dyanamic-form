<template>
    <div>
        <p>{{ myObject!.asd.foo }}</p>
    </div>
</template>

<script setup lang="ts">
/* __placeholder__ */
import type { PropType } from 'vue'
import type { UI_schema_property } from '../types/ui-schema';

defineProps({
    myObject: Object as PropType<UI_schema_property>
})
</script>
