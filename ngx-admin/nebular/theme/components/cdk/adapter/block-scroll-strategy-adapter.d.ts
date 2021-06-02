import { NgZone } from '@angular/core';
import { BlockScrollStrategy, ScrollDispatcher, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NbLayoutScrollService } from '../../../services/scroll.service';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
/**
 * Overrides default block scroll strategy because default strategy blocks scrolling on the body only.
 * But Nebular has its own scrollable container - nb-layout. So, we need to block scrolling in it to.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class NbBlockScrollStrategyAdapter extends BlockScrollStrategy {
    protected scrollService: NbLayoutScrollService;
    constructor(document: any, viewportRuler: NbViewportRulerAdapter, scrollService: NbLayoutScrollService);
    enable(): void;
    disable(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbBlockScrollStrategyAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbBlockScrollStrategyAdapter>;
}
export declare class NbScrollStrategyOptions extends ScrollStrategyOptions {
    protected scrollService: NbLayoutScrollService;
    protected scrollDispatcher: ScrollDispatcher;
    protected viewportRuler: NbViewportRulerAdapter;
    protected ngZone: NgZone;
    protected document: any;
    constructor(scrollService: NbLayoutScrollService, scrollDispatcher: ScrollDispatcher, viewportRuler: NbViewportRulerAdapter, ngZone: NgZone, document: any);
    block: () => NbBlockScrollStrategyAdapter;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbScrollStrategyOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NbScrollStrategyOptions>;
}
export declare type NbScrollStrategies = keyof Pick<NbScrollStrategyOptions, 'noop' | 'close' | 'block' | 'reposition'>;

//# sourceMappingURL=block-scroll-strategy-adapter.d.ts.map