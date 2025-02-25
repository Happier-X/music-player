<template>
    <div class="w-full h-full">
        <div class="w-full h-[200px]">
            <div class="card card-side bg-base-100 p-4">
                <figure>
                    <div class="avatar flex items-center justify-center">
                        <div class="w-40 h-40 rounded">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">歌曲</h2>
                    <p>共123首</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-neutral">播放全部</button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full h-[calc(100%-200px)] overflow-y-scroll scrollbar-hide">
            <ul class="list">
                <li class="list-row" v-for="(item, index) in 100" :key="index">
                    <div>
                        <img
                            class="size-10 rounded-box"
                            src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                    </div>
                    <div>
                        <div>Dio Lupa</div>
                        <div class="text-xs uppercase font-semibold opacity-60">
                            Remaining Reason
                        </div>
                    </div>
                    <button class="btn btn-square btn-ghost">
                        <svg
                            class="size-[1.2em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <g
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                fill="none"
                                stroke="currentColor">
                                <path d="M6 3L20 12 6 21 6 3z"></path>
                            </g>
                        </svg>
                    </button>
                    <button class="btn btn-square btn-ghost">
                        <svg
                            class="size-[1.2em]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <g
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="2"
                                fill="none"
                                stroke="currentColor">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </g>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
