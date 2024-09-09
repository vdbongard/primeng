import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Code } from '@domain/code';

@Component({
    selector: 'text-doc',
    template: `
        <app-docsectiontext>
            <p>Text buttons are displayed as textual elements.</p>
        </app-docsectiontext>
        <div class="card flex justify-center flex-wrap gap-4">
            <p-toast />
            <p-split-button label="Primary" [model]="items" (onClick)="save('info')" text />
            <p-split-button label="Secondary" [model]="items" (onClick)="save('info')" text severity="secondary" />
            <p-split-button label="Success" [model]="items" (onClick)="save('info')" text severity="success" />
            <p-split-button label="Info" [model]="items" (onClick)="save('info')" text severity="info" />
            <p-split-button label="Warning" [model]="items" (onClick)="save('info')" text severity="warning" />
            <p-split-button label="Help" [model]="items" (onClick)="save('info')" text severity="help" />
            <p-split-button label="Danger" [model]="items" (onClick)="save('info')" text severity="danger" />
        </div>
        <app-code [code]="code" selector="split-button-text-demo"></app-code>
    `,
    providers: [MessageService],
})
export class TextDoc {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                },
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                },
            },
            { label: 'Angular Website', url: 'http://angular.io' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] },
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }

    code: Code = {
        basic: `<p-split-button 
    label="Primary" 
    [model]="items" 
    (onClick)="save('info')" 
    text />
<p-split-button 
    label="Secondary" 
    [model]="items" 
    (onClick)="save('info')" 
    text 
    severity="secondary" />
<p-split-button 
    label="Success" 
    [model]="items" 
    (onClick)="save('info')" 
    text 
    severity="success" />
<p-split-button 
    label="Info" 
    [model]="items" 
    (onClick)="save('info')"
    text 
    severity="info" />
<p-split-button 
    label="Warning" 
    [model]="items" 
    (onClick)="save('info')" 
    text 
    severity="warning" />
<p-split-button 
    label="Help" 
    [model]="items" 
    (onClick)="save('info')" 
    text 
    severity="help" />
<p-split-button 
    label="Danger" 
    [model]="items"
    (onClick)="save('info')" 
    text 
    severity="danger" />`,

        html: `<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-split-button 
        label="Primary" 
        [model]="items" 
        (onClick)="save('info')" 
        text />
    <p-split-button 
        label="Secondary" 
        [model]="items" 
        (onClick)="save('info')"
        text 
        severity="secondary" />
    <p-split-button 
        label="Success" 
        [model]="items" 
        (onClick)="save('info')" 
        text 
        severity="success" />
    <p-split-button 
        label="Info" 
        [model]="items" 
        (onClick)="save('info')" 
        text 
        severity="info" />
    <p-split-button 
        label="Warning" 
        [model]="items" 
        (onClick)="save('info')" 
        text 
        severity="warning" />
    <p-split-button 
        label="Help"
        [model]="items" 
        (onClick)="save('info')" 
        text 
        severity="help" />
    <p-split-button 
        label="Danger" 
        [model]="items" 
        (onClick)="save('info')" 
        text 
        severity="danger" />
</div>`,

        typescript: `import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-text-demo',
    templateUrl: './split-button-text-demo.html',
    standalone: true,
    imports: [SplitButtonModule, ToastModule],
    providers: [MessageService]
})
export class SplitButtonTextDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular Website', url: 'http://angular.io' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`,
    };
}
