import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[tab]' })
export class TabAcceptApplyDirective {
  @Input('tab') set topic(topic: any) {
    this.setStyle(topic);
  }

  private el: HTMLElement;
  private tabMaps: Array<{key: string, value: string}> = [
    {
      key: '0',
      value: '新增',
    },
    {
      key: '99',
      value: '待审批',
    },
    {
      key: '1',
      value: '已审批',
    },
    {
      key: '2',
      value: '退回',
    }
    ]

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.setStyle(this.topic);
  }

  private setStyle(topic) {
    if (topic) {
      this.el.style.borderRadius = '3px';
      this.el.style.paddingLeft='7px';
      this.el.style.paddingRight='7px';
      this.el.style.paddingTop='4px';
      this.el.style.paddingBottom='4px';
      if (topic.reviewStatus=='0') {
        this.el.textContent = '新增';
        this.el.style.background = '#32DB64';
        this.el.style.color = '#fff';
      }
      else if (topic.reviewStatus=='99') {
        this.el.textContent = '待审批';
        this.el.style.background = '#BDAE52';
        this.el.style.color = '#fff';
      }else if (topic.reviewStatus=='1') {
        this.el.textContent = '已审批';
        this.el.style.background = '#3374de';
        this.el.style.color = '#fff';
      }
      else {
        this.el.textContent = this.getValue('2');
        this.el.style.background = '#f53d3d';
        this.el.style.color = '#fff';
      }
    }
  }

  private getValue(key: string): string {
    for(let item of this.tabMaps) {
      if (item.key === key) {
        return item.value;
      }
    }
  }
}
