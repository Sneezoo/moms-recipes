<template>
    <Page>
        <ActionBar :title="recipe.title" class="action-bar" />
        <ScrollView>
            <StackLayout>
                <Label class="c-description" :text="recipe.shortDesc" />
                <Label class="c-ingredients" text="a lot of text is going to be here" />
                <Label class="c-cooking" text="even more text will be here" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true,
            default: {
                id: 0,
                title: "Ooops",
                shortDesc: "This should not have happend! Very sorry!",
                tags: [],
            }
        }
    }
}
</script>

<style scoped>

</style>
