import { CdkFooterRow, CdkFooterRowDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkCellOutlet, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet } from '@angular/cdk/table';
import * as ɵngcc0 from '@angular/core';
export declare class NbDataRowOutletDirective extends DataRowOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbDataRowOutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbDataRowOutletDirective, "[nbRowOutlet]", never, {}, {}, never>;
}
export declare class NbHeaderRowOutletDirective extends HeaderRowOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbHeaderRowOutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbHeaderRowOutletDirective, "[nbHeaderRowOutlet]", never, {}, {}, never>;
}
export declare class NbFooterRowOutletDirective extends FooterRowOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbFooterRowOutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbFooterRowOutletDirective, "[nbFooterRowOutlet]", never, {}, {}, never>;
}
export declare class NbNoDataRowOutletDirective extends NoDataRowOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbNoDataRowOutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbNoDataRowOutletDirective, "[nbNoDataRowOutlet]", never, {}, {}, never>;
}
export declare class NbCellOutletDirective extends CdkCellOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbCellOutletDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbCellOutletDirective, "[nbCellOutlet]", never, {}, {}, never>;
}
/**
 * Header row definition for the nb-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export declare class NbHeaderRowDefDirective extends CdkHeaderRowDef {
    columns: Iterable<string>;
    sticky: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbHeaderRowDefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbHeaderRowDefDirective, "[nbHeaderRowDef]", never, { "columns": "nbHeaderRowDef"; "sticky": "nbHeaderRowDefSticky"; }, {}, never>;
}
/**
 * Footer row definition for the nb-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export declare class NbFooterRowDefDirective extends CdkFooterRowDef {
    columns: Iterable<string>;
    sticky: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbFooterRowDefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbFooterRowDefDirective, "[nbFooterRowDef]", never, { "columns": "nbFooterRowDef"; "sticky": "nbFooterRowDefSticky"; }, {}, never>;
}
/**
 * Data row definition for the nb-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
export declare class NbRowDefDirective<T> extends CdkRowDef<T> {
    columns: Iterable<string>;
    when: (index: number, rowData: T) => boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbRowDefDirective<any>, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<NbRowDefDirective<any>, "[nbRowDef]", never, { "columns": "nbRowDefColumns"; "when": "nbRowDefWhen"; }, {}, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class NbHeaderRowComponent extends CdkHeaderRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbHeaderRowComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbHeaderRowComponent, "nb-header-row, tr[nbHeaderRow]", never, {}, {}, never, never>;
}
/** Footer template container that contains the cell outlet. Adds the right class and role. */
export declare class NbFooterRowComponent extends CdkFooterRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbFooterRowComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbFooterRowComponent, "nb-footer-row, tr[nbFooterRow]", never, {}, {}, never, never>;
}
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class NbRowComponent extends CdkRow {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NbRowComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NbRowComponent, "nb-row, tr[nbRow]", never, {}, {}, never, never>;
}

//# sourceMappingURL=row.d.ts.map