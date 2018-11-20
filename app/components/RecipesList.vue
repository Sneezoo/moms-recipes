<template>
    <Page class="page">
        <ActionBar title="Recipes" class="action-bar" />
        <ScrollView>
            <ListView for="item in items" @itemTap="navigateToRecipe">
                <v-template>
                    <StackLayout>
                        <Label :text="item.title" />
                        <Label :text="item.shortDesc" />
                    </StackLayout>
                </v-template>
            </ListView>
        </ScrollView>
    </Page>
</template>

<script>
import Recipe from './Recipe';
export default {
    data () {
        return {
            items: [
                {
                    id: 1,
                    title: "1st meal",
                    shortDesc: "This is so tasty",
                    tags: [
                        "meal",
                        "some",
                        "tasty",
                    ],
                },
                {
                    id: 2,
                    title: "2nd meal",
                    shortDesc: "This is so tasty",
                    tags: [
                        "meal",
                        "some",
                        "tasty",
                    ],
                },
                {
                    id: 3,
                    title: "3rd meal",
                    shortDesc: "This is so tasty",
                    tags: [
                        "meal",
                        "some",
                        "tasty",
                    ],
                },
                {
                    id: 4,
                    title: "4th meal",
                    shortDesc: "This is so tasty",
                    tags: [
                        "meal",
                        "some",
                        "tasty",
                    ],
                },
                {
                    id: 5,
                    title: "5th meal",
                    shortDesc: "This is so tasty",
                    tags: [
                        "meal",
                        "some",
                        "tasty",
                    ],
                },
            ],
        };
    },
    methods: {
        navigateToRecipe({ item: recipe }) {
            this.$navigateTo(Recipe, { props: { recipe } });
        }
    },
}
</script>

<style scoped>

</style>
