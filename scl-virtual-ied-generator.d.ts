import { LitElement, PropertyValues, TemplateResult } from 'lit';
import '@openscd/oscd-tree-grid';
import type { Tree, TreeGrid, TreeSelection } from '@openscd/oscd-tree-grid';
import '@openenergytools/scl-text-field';
import type { SclTextField } from '@openenergytools/scl-text-field';
export type FunctionElementDescription = {
    uniqueName: string;
    lNodes: Element[];
    lln0?: Element;
};
type AnyLNDescription = {
    lnClass: string;
    inst: string;
    prefix: string | null;
    lnType: string;
    lNodeId?: string;
};
type LDeviceDescription = {
    ldInst: string;
    ln0?: AnyLNDescription;
    lns: AnyLNDescription[];
};
export type VirtualIED = {
    name: string | null;
    manufacturer: string;
    desc: string | null;
    apName: string;
    lDevices: LDeviceDescription[];
};
type LDDesc = {
    ldInst: string;
    lNodeIds: string[];
};
export type VirtIed = {
    name: string | null;
    manufacturer: string;
    desc: string | null;
    apName: string;
    lDevices: LDDesc[];
};
export declare const ldInstPatter = "[A-Za-z0-9][0-9A-Za-z_]*";
/**
 * A xxSubFunction with only one child `LNode` is considered a leaf function and
 * is not used to define a logical device instance but the prefix of the `LNode`
 * @param subFunction - SCL element (xxSubFunction)
 * @returns Whether the element is a leaf function acc. to IEC 61850-6-100
 * */
export declare function isLeafFunction(subFunction: Element | null): boolean;
/** @returns prefix of LNode element acc. to IEC 61850-6-100 */
export declare function getFunctionNamingPrefix(lNode: Element): string;
export declare function getUniqueFunctionName(element: Element): string;
/** @returns closest non-leaf function type parent element */
export declare function getNonLeafParent(element: Element | null): Element | null;
export default class SclVirtualIedGenerator extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectedLNodes: Element[];
    virtualIED: VirtualIED;
    funcs: Record<string, FunctionElementDescription>;
    tree: Tree;
    treeUI: TreeGrid;
    iedNameInput: SclTextField;
    descInput: SclTextField;
    manufacturerInput: SclTextField;
    apNameInput: SclTextField;
    /** Returns schema valid SPECIFICATION type IED based on virtualIED object  */
    createVirtualIed(virtIed: VirtIed): void;
    virtualIed(selection: TreeSelection): VirtIed;
    private renderVirtualIED;
    protected updated(changedProperties: PropertyValues): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
