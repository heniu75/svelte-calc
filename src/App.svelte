<script lang="ts">
    import SetRight from './SetRight.svelte';
    import SetLeft from './SetLeft.svelte';
    import Equals from './Equals.svelte';
    import Right from './Right.svelte';
    import Left from './Left.svelte';
    import Plus from './Plus.svelte';
    import Answer from './Answer.svelte';

    import { calculator } from './stores/calculator.store';
    import { counter } from './stores/counter.store';

    let name = `to Hein's basic calculator`;
    $: console.log('calculator', $calculator);
    $: console.log('counter', $counter);

</script>

<h1>Welcome {name}!</h1>
<h3>Instructions</h3>
<ol>
    <li>Click set left to set the calculator left value to 7</li>
    <li>Click set right to set the calculator right value to 9</li>
    <li>Click the equals SVG to obtain the answer</li>
</ol>

<div id="container">
    <Left/>
    <Plus/>
    <Right/>
    <Equals/>
    <Answer/>
</div>
<SetLeft/>
<SetRight/>

<style>
    #container {
        width: 400px;
        display: flex; /* establish flex container */
        flex-direction: row; /* default value; can be omitted */
        flex-wrap: nowrap; /* default value; can be omitted */
        justify-content: space-around; /* switched from default (flex-start, see below) */
        align-items: center;
        background-color: lightgoldenrodyellow;
    }

    #container > div {
        width: 100px;
        height: 100px;
        border: 2px dashed red;
        margin: auto;
    }
</style>