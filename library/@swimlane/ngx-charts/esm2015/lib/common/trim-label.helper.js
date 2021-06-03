export function trimLabel(s, max = 16) {
    if (typeof s !== 'string') {
        if (typeof s === 'number') {
            return s + '';
        }
        else {
            return '';
        }
    }
    s = s.trim();
    if (s.length <= max) {
        return s;
    }
    else {
        return `${s.slice(0, max)}...`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpbS1sYWJlbC5oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vdHJpbS1sYWJlbC5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUU7SUFDbkMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekIsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRjtJQUVELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7U0FBTTtRQUNMLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO0tBQ2hDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0cmltTGFiZWwocywgbWF4ID0gMTYpOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHMgKyAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIHMgPSBzLnRyaW0oKTtcbiAgaWYgKHMubGVuZ3RoIDw9IG1heCkge1xuICAgIHJldHVybiBzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtzLnNsaWNlKDAsIG1heCl9Li4uYDtcbiAgfVxufVxuIl19