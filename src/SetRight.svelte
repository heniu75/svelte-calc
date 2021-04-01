<script>
    import { calculator, setRight } from './stores/calculator.store';
    import { counter } from './stores/counter.store';

    function decrement() {
        setRight(calculator,9);
        counter.update(val => val - 1);
    }
</script>

<button on:click={decrement}>
    set right to 9
</button>