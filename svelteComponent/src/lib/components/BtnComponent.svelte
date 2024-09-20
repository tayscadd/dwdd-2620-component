<script>
    export let txt = 'Button' // Defaults to Button
    export let size = 'md'; // sm, md, lg, fill
    export let disabled = false; // true, false
    export let bg = false
    export let svg = false

    
    let cls = ['flex', 'px-4', 'w-fit', 'flex-row', 'gap-2', 'border-none','place-items-center', 'justify-center', 'h-11',`font-['Inter']`, 'border-none', 'text-white', 'rounded-[999999px]', 'disabled:text-[#979C9E]', 'group']
    
    if (size === 'sm') {cls.push('min-w-24')}
    else if (size === 'md') {cls.push('min-w-36')}
    else if (size === 'lg') {cls.push('min-w-80')}
    else if (size === 'fill') {cls.push('w-full')}

    if (bg===false) {
        cls.push('bg-[#6B4EFF]', 'hover:bg-[#5538EE]', 'disabled:bg-[#E3E5E5]', 'disabled:text-[#979C9E]', 'text-white')
    } else {
        cls.push('bg-transparent', 'text-[#6B4EFF]')
    }

    let class_string = cls.join(' ')

    let svg_component = `<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <circle class="group-disabled:stroke-[#979C9E] origin-center" cx="8" cy="8" r="7" fill="none" stroke="white" stroke-width="1"/>
        </svg>`
</script>

<style></style>

{#if disabled == false}
    <button class='{class_string}'>
        {#if svg} {svg_component} {/if}

        <span>{txt}</span>
    </button>
{:else}
    <button class='{class_string}' disabled>
        {#if svg} {svg_component} {/if}

        <span>{txt}</span>
    </button>
{/if}