<script>
    import { calculator, setLeft } from './stores/calculator.store';
    import { counter } from './stores/counter.store';

    function increment() {
        setLeft(calculator,7);
        counter.update(val => val + 1);
    }
</script>

<button on:click={increment}>
    set left to 7
</button>