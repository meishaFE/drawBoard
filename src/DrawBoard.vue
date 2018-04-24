<template>
    <div class="draw"
         ref="drawContainer">
        <div v-if="!readonly"
             class="draw-control-container">
            <div v-show="isShowAllTool"
                 class="draw-control-content">
                <div @click.prevent.stop="undo"
                     class="control-button control-button-back">
                    <img src="./assets/images/icon_tool_back.png">
                </div>
                <div @click.prevent.stop="useEraser"
                     class="control-button control-button-eraser">
                    <svg width="20px"
                         height="19px"
                         viewBox="0 0 20 19"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>brush tool_icon_eraser_pre</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                            <polygon id="path-1"
                                     points="0.00206896552 0.0153977007 0.00206896552 18.9657658 19.9747437 18.9657658 19.9747437 0.0153977007 0.00206896552 0.0153977007"></polygon>
                        </defs>
                        <g stroke="none"
                           stroke-width="1"
                           fill="none"
                           fill-rule="evenodd">
                            <g transform="translate(-1264.000000, -532.000000)">
                                <g id="brush-tool_icon_eraser_pre"
                                   transform="translate(1264.000000, 532.000000)">
                                    <mask id="mask-2"
                                          fill="white">
                                        <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g></g>
                                    <path d="M19.5666897,6.89378198 L12.8122414,0.39341982 C12.2800345,-0.121565766 11.428069,-0.10818018 10.9120345,0.420156757 L0.378517241,11.1419081 C-0.137517241,11.670245 -0.124206897,12.5162072 0.408,13.0285225 L6.56572414,18.9550505 L9.58417241,18.9657658 L19.5963103,8.78025946 C20.1123448,8.25205946 20.0988621,7.4060973 19.5666897,6.89378198 Z M11.1861379,16.9003459 C10.8797241,17.2232775 10.3851034,17.252582 10.0761034,16.9643982 L2.9587931,10.2826973 C2.65234483,9.99718378 2.64965517,9.50078739 2.95610345,9.18066306 C3.12,9.0071982 3.33768966,8.91907928 3.55548276,8.91907928 C3.74082759,8.91907928 3.92093103,8.98313153 4.06344828,9.11661081 L11.1807586,15.7982775 C11.4872069,16.0864613 11.4898966,16.5801874 11.1861379,16.9003459 Z"

                                          :fill="currentDrawTool === 'pen' ? '#8492A6' : '#475669'"
                                          mask="url(#mask-2)"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div v-for="(color, index) in penColors"
                     :key="`color-${index}`"
                     :style="{backgroundColor: color}"
                     @click.prevent.stop="selectColor(color)"
                     class="control-button control-button-color">
                    <svg focusable="false"
                         width="10"
                         height="10"
                         viewBox="0 0 10 10">
                        <path fill="#fff"
                              v-if="currentDrawTool === 'pen' && currentColor === color"
                              d="M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,10,3.8z"></path>
                    </svg>
                </div>
            </div>
            <div class="control-button control-button-toggle"
                 @click.prevent.stop="toggleShowAllTool">
                <svg width="34px"
                     height="34px"
                     viewBox="0 0 34 34"
                     version="1.1"
                     v-if="currentDrawTool === 'pen'"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>pencil_colour_blues</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g stroke="none"
                       stroke-width="1"
                       fill="none"
                       fill-rule="evenodd">
                        <g id="Artboard-2"
                           transform="translate(-211.000000, -441.000000)">
                            <g id="pencil_colour_blues"
                               transform="translate(212.000000, 442.000000)">
                                <circle id="Oval-2-Copy"
                                        stroke="#475669"
                                        stroke-width="1.5"
                                        cx="16"
                                        cy="16"
                                        r="16"></circle>
                                <polygon id="Clip-2"
                                         transform="translate(16.260772, 12.261435) rotate(-10.000000) translate(-16.260772, -12.261435) "
                                         points="8.26682949 4.26667526 8.26682949 20.2561946 24.2547153 20.2561946 24.2547153 4.26667526"></polygon>
                                <path d="M20.9975584,9.77426917 C23.0907584,7.55869774 23.4608341,7.83565277 20.7941674,5.1689861 C18.6641947,3.03901337 18.9638882,3.46828686 16.6812882,5.45920114 L20.9975584,9.77426917 Z"
                                      id="Fill-1"
                                      fill="#475669"
                                      transform="translate(19.681324, 6.765668) rotate(-10.000000) translate(-19.681324, -6.765668) "></path>
                                <path d="M17.2449942,7.06830603 C17.0313656,7.27064889 16.8093942,7.48827746 16.575137,7.72367746 C16.5308227,7.76876318 10.1033275,14.3885632 10.1033275,14.3885632 C10.1033275,14.3885632 9.42845448,16.4833727 8.07870844,20.6729917 C12.0951211,19.3278171 14.1033275,18.6552298 14.1033275,18.6552298 C14.1033275,18.6552298 20.8678799,12.1571632 20.9199942,12.1044775 C21.1532513,11.869106 21.370337,11.6458775 21.5732227,11.4328203 L17.2449942,7.06830603 Z"

                                      id="Fill-3"
                                      fill="#475669"
                                      transform="translate(14.825966, 13.870649) rotate(-10.000000) translate(-14.825966, -13.870649) "></path>
                                <path d="M10.2257584,20.3588009 C10.7934462,26.0157306 15.736196,22.3231267 18.4686311,21.8712516 C21.8425774,21.3132869 19.0254264,25.5277216 26.2257584,24.0381012"
                                      id="Path-13"
                                      :stroke="currentColor"
                                      transform="translate(18.225758, 22.358801) rotate(-10.000000) translate(-18.225758, -22.358801) "></path>
                                <path d="M10,15 C10,15 10.6666667,15.1666667 12,15.5 L12.5,17 L14.5,17 L15,18.5 L15,19 L9,22 C9.66666667,17.3333333 10,15 10,15 Z"
                                      id="Path-2"
                                      :fill="currentColor"></path>
                                <polyline id="Path-11"
                                          stroke="#FFFFFF"
                                          transform="translate(12.500000, 17.458378) rotate(-10.000000) translate(-12.500000, -17.458378) "
                                          points="9.90010071 14.9268279 11.9442587 15.2872681 12.4927724 17.4993677 14.4623879 17.846664 15.0998993 19.9899277"></polyline>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg width="34px"
                     height="34px"
                     viewBox="0 0 34 34"
                     version="1.1"
                     v-else
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Group</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="学生端"
                       stroke="none"
                       stroke-width="1"
                       fill="none"
                       fill-rule="evenodd">
                        <g id="Artboard-2"
                           transform="translate(-539.000000, -439.000000)">
                            <g id="Group"
                               transform="translate(540.000000, 440.000000)">
                                <circle id="Oval-2-Copy-9"
                                        stroke="#475669"
                                        stroke-width="1.5"
                                        cx="16"
                                        cy="16"
                                        r="16"></circle>
                                <polygon id="Clip-2"
                                         points="7.00206897 6.0153977 7.00206897 24.9657658 26.9747437 24.9657658 26.9747437 6.0153977 7.00206897 6.0153977"></polygon>
                                <path d="M25.5666853,13.8783843 L18.812237,7.37802212 C18.2800301,6.86303653 17.4280646,6.87642212 16.9120301,7.40475906 L6.37851291,18.1265104 C5.86247842,18.6548473 5.87578877,19.5008095 6.40799566,20.0131248 L12.5657198,25.9396527 L15.5841681,25.9503681 L25.596306,15.7648618 C26.1123405,15.2366618 26.0988577,14.3906996 25.5666853,13.8783843 Z M17.1861336,23.8849482 C16.8797198,24.2078798 16.3850991,24.2371843 16.0760991,23.9490005 L8.95878877,17.2672996 C8.65234049,16.9817861 8.64965084,16.4853897 8.95609911,16.1652654 C9.11999566,15.9918005 9.33768532,15.9036816 9.55547842,15.9036816 C9.74082325,15.9036816 9.9209267,15.9677338 10.0634439,16.1012131 L17.1807543,22.7828798 C17.4872026,23.0710636 17.4898922,23.5647897 17.1861336,23.8849482 Z"

                                      fill="#475669"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <div id="draw-board"
             ref="drawBoardContainer"
             class="draw-board"
             @mousedown="startDraw"
             @mousemove="painting">
        </div>
        <button v-if="!readonly"
                   class="draw-save-button"
                   type="primary"
                   :disabled="isBtnDisabled"
                   :loading="isBtnLoading"
                   @click="save">Save</button>
    </div>
</template>

<script>
import Draw from '@/utils/draw.ts';
import $type from '@/utils/type';

let drawBoard;

const handleMouseUp = event => {
    const { pageX: x, pageY: y } = event;
    drawBoard.endDraw(x, y);
    window.removeEventListener('mouseup', handleMouseUp);
};

export default {
    name: 'MsDrawBoard',
    props: {
        restoreDisablePath: {
            type: Array,
            default() {
                return [];
            }
        },
        restorePath: {
            type: Array,
            default() {
                return [];
            }
        },
        defaultColor: {
            type: String,
            default() {
                return '#21242C';
            }
        },
        readonly: {
            type: Boolean,
            default() {
                return false;
            }
        },
        ifRunClear: {
            type: Boolean,
            default() {
                return false;
            }
        },
        isBtnLoading: {
            type: Boolean,
            default() {
                return false;
            }
        },
        isBtnDisabled: {
            type: Boolean,
            default() {
                return false;
            }
        },
        penColors: {
            type: Array,
            default() {
                return ['#01A995', '#E84D39', '#74CF70', '#FFBE26', '#CA337C', '#7853AB', '#11ACCD', '#20A0FF', '#21242C'];
            }
        }
    },
    data() {
        return {
            currentPath: null,
            isShowAllTool: false,
            currentDrawTool: 'pen',
            currentColor: '#21242C'
        };
    },
    mounted() {
        this.currentColor = this.defaultColor;
        setTimeout(() => {
            this.init();
        });
    },
    methods: {
        init() {
            const el = this.$refs.drawBoardContainer || document.getElementById('draw-board');
            const opts = { color: this.currentColor };
            drawBoard = new Draw(el, opts);
            this.restoreAllPath();
            this.$emit('init', drawBoard);
        },
        restoreAllPath() {
            drawBoard.clear();
            const restorePath = this.restorePath;
            const restoreDisablePath = this.restoreDisablePath.map(path => ({ ...path, editDisabled: true }));
            if (restorePath && $type.isArray(restorePath) && restorePath.length) this.restore(restorePath);
            if (restoreDisablePath && $type.isArray(restoreDisablePath) && restoreDisablePath.length) this.restore(restoreDisablePath);
        },
        restore(data) {
            data.forEach(data => {
                drawBoard.restore(data.path, data.color, !data.editDisabled);
            });
        },
        startDraw(event) {
            if (!this.readonly) {
                const { pageX: x, pageY: y } = event;
                setTimeout(() => {
                    drawBoard.startDraw(x, y);
                });
                window.addEventListener('mouseup', handleMouseUp);
            }
        },
        painting(event) {
            if (!this.readonly) {
                const { pageX: x, pageY: y } = event;
                setTimeout(() => {
                    drawBoard.drawing(x, y);
                    this.$emit('change');
                });
            }
        },
        usePen() {
            this.currentDrawTool = drawBoard.setDrawTool('pen');
        },
        useEraser() {
            this.currentDrawTool = drawBoard.setDrawTool('eraser');
        },
        selectColor(color) {
            this.usePen();
            this.currentColor = drawBoard.setColor(color);
        },
        toggleShowAllTool() {
            this.isShowAllTool = !this.isShowAllTool;
        },
        undo() {
            drawBoard.undo();
            this.$emit('undo');
        },
        save() {
            this.$emit('update:isBtnLoading', true);
            const image = drawBoard.toImage();
            const paths = drawBoard.getPathData();
            this.$emit('save', image, paths);
        }
    },
    watch: {
        restorePath(val, oldVal) {
            if (!drawBoard) return;
            if (val && val !== oldVal && $type.isArray(val)) this.restore(val);
        },
        restoreDisablePath(val, oldVal) {
            if (!drawBoard) return;
            if (val && val !== oldVal && $type.isArray(val)) {
                const restoreDisablePath = val.map(path => ({ ...path, editDisabled: true }));
                this.restore(restoreDisablePath);
            }
        },
        ifRunClear(val) {
            if (val) {
                drawBoard.clear();
                this.$emit('clear');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.draw {
    position: relative;

    width: 100%;
    max-width: 1024px;
    height: 100%;
    max-height: 700px;
    &::-webkit-scrollbar {
        display: none;
    }
}

.draw-control-container {
    position: absolute;
    bottom: 30px;
    left: 0;

    display: flex;
    overflow-y: auto;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;

    min-height: 400px;
    max-height: 90%;
    margin-left: 30px;
    &::-webkit-scrollbar {
        display: none;
    }
    .draw-control-content {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .control-button {
        position: relative;
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;
        margin-top: 12px;

        cursor: pointer;
        user-select: none;

        border-radius: 50%;
        &-color {
            padding-bottom: 2px;
        }

        &-toggle {
            margin-top: 20px;
            &,
            img {
                width: 32px;
                height: 32px;
            }
        }

        &-eraser {
            &,
            img {
                width: 20px;
                height: 20px;
            }
        }
        &-back {
            &,
            img {
                width: 18px;
                height: 16px;
            }
        }
    }
}

.draw-save-button {
    position: absolute;
    right: 0;
    bottom: 30px;

    width: 120px;
    height: 40px;
}

.draw-board {
    width: 100%;
    height: 100%;
}
</style>

