'use strict';

(function () {
	/**
 * @ngdoc directive
 * @name app.directive:completeBlock
 * @param {String} headerImg URL of the picture
 * @param {String} headerTitle Name of the title of the block
 * @param {String} headerPicto Type of the awesome picto
 * @param {String} headerColor Color of the clock
 * @param {String} headerBackgroundColor Color of the background
 * @param {String} bodyTitle Title of the block
 * @param {String} bodyText Content of the block
 * @restrict 'EA' //the elements the directive is restricted to.
 * @element ANY
 * @scope  //add this attribute if you create a scope in your directive.
 * description : Use the template:'<div ng-class="(headerPicto != null && headerPicto.length != 0) || (headerTitle != null && headerTitle.length != 0) ? \'complete-block\' : \'complete-block-no-header\'"><div ng-if="headerImg != null && img.length != 0" class=wrapper-header-img><img ng-src={{headerImg}} class=img-responsive></div><div ng-if="headerPicto != null && headerPicto.length != 0" class="header {{headerBackgroundColor}} {{headerColor}}"><div class={{headerPicto}}></div></div><div ng-if="headerTitle != null && headerTitle.length != 0" class="header-text {{headerBackgroundColor}} {{headerColor}} text-left">{{headerTitle}}</div><div class="wrapper-body {{bodyBackgroundColor}}"><div ng-if="bodyTitle != null && bodyTitle.length != 0" class=body-title>{{bodyTitle}}</div><div class="body-text text-justify">{{bodyText}}</div></div></div>'
 **/
	app.directive('completeBlock', function () {
		return {
			restrict: 'EA',
			replace: true,
			transclude: true,
			scope: {
				headerImg: '@headerImg',
				headerTitle: '@headerTitle',
				headerPicto: '@headerPicto',
				headerColor: '@headerColor',
				headerBackgroundColor: '@headerBackgroundColor',
				bodyBackgroundColor: '@bodyBackgroundColor',
				bodyTitle: '@bodyTitle',
				bodyText: '@bodyText'
			},
			template: '<div ng-class="(headerPicto != null && headerPicto.length != 0) || (headerTitle != null && headerTitle.length != 0) ? \'complete-block\' : \'complete-block-no-header\'"><div ng-if="headerImg != null && img.length != 0" class=wrapper-header-img><img ng-src={{headerImg}} class=img-responsive></div><div ng-if="headerPicto != null && headerPicto.length != 0" class="header {{headerBackgroundColor}} {{headerColor}}"><div class={{headerPicto}}></div></div><div ng-if="headerTitle != null && headerTitle.length != 0" class="header-text {{headerBackgroundColor}} {{headerColor}} text-left">{{headerTitle}}</div><div class="wrapper-body {{bodyBackgroundColor}}"><div ng-if="bodyTitle != null && bodyTitle.length != 0" class=body-title>{{bodyTitle}}</div><div class="body-text text-justify">{{bodyText}}</div></div></div>'
		};
	});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlQmxvY2tEaXJlY3RpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk4sS0FBSSxTQUFKLENBQWMsZUFBZCxFQUErQixZQUFNO0FBQ3BDLFNBQU87QUFDTixhQUFVLElBQVY7QUFDQSxZQUFTLElBQVQ7QUFDQSxlQUFZLElBQVo7QUFDQSxVQUFPO0FBQ04sZUFBVyxZQUFYO0FBQ0EsaUJBQWEsY0FBYjtBQUNBLGlCQUFhLGNBQWI7QUFDQSxpQkFBYSxjQUFiO0FBQ0EsMkJBQXVCLHdCQUF2QjtBQUNBLHlCQUFxQixzQkFBckI7QUFDQSxlQUFXLFlBQVg7QUFDQSxjQUFVLFdBQVY7SUFSRDtBQVVBLGFBQVMsZ3pCQUFUO0dBZEQsQ0FEb0M7RUFBTixDQUEvQixDQWhCTTtDQUFOLENBQUQiLCJmaWxlIjoiY29tcGxldGVCbG9ja0RpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cdC8qKlxuXHQqIEBuZ2RvYyBkaXJlY3RpdmVcblx0KiBAbmFtZSBhcHAuZGlyZWN0aXZlOmNvbXBsZXRlQmxvY2tcblx0KiBAcGFyYW0ge1N0cmluZ30gaGVhZGVySW1nIFVSTCBvZiB0aGUgcGljdHVyZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJUaXRsZSBOYW1lIG9mIHRoZSB0aXRsZSBvZiB0aGUgYmxvY2tcblx0KiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyUGljdG8gVHlwZSBvZiB0aGUgYXdlc29tZSBwaWN0b1xuXHQqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJDb2xvciBDb2xvciBvZiB0aGUgY2xvY2tcblx0KiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyQmFja2dyb3VuZENvbG9yIENvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kXG5cdCogQHBhcmFtIHtTdHJpbmd9IGJvZHlUaXRsZSBUaXRsZSBvZiB0aGUgYmxvY2tcblx0KiBAcGFyYW0ge1N0cmluZ30gYm9keVRleHQgQ29udGVudCBvZiB0aGUgYmxvY2tcblx0KiBAcmVzdHJpY3QgJ0VBJyAvL3RoZSBlbGVtZW50cyB0aGUgZGlyZWN0aXZlIGlzIHJlc3RyaWN0ZWQgdG8uXG5cdCogQGVsZW1lbnQgQU5ZXG5cdCogQHNjb3BlICAvL2FkZCB0aGlzIGF0dHJpYnV0ZSBpZiB5b3UgY3JlYXRlIGEgc2NvcGUgaW4geW91ciBkaXJlY3RpdmUuXG5cdCogZGVzY3JpcHRpb24gOiBVc2UgdGhlIHRlbXBsYXRlOic8ZGl2IG5nLWNsYXNzPVwiKGhlYWRlclBpY3RvICE9IG51bGwgJiYgaGVhZGVyUGljdG8ubGVuZ3RoICE9IDApIHx8IChoZWFkZXJUaXRsZSAhPSBudWxsICYmIGhlYWRlclRpdGxlLmxlbmd0aCAhPSAwKSA/IFxcJ2NvbXBsZXRlLWJsb2NrXFwnIDogXFwnY29tcGxldGUtYmxvY2stbm8taGVhZGVyXFwnXCI+PGRpdiBuZy1pZj1cImhlYWRlckltZyAhPSBudWxsICYmIGltZy5sZW5ndGggIT0gMFwiIGNsYXNzPXdyYXBwZXItaGVhZGVyLWltZz48aW1nIG5nLXNyYz17e2hlYWRlckltZ319IGNsYXNzPWltZy1yZXNwb25zaXZlPjwvZGl2PjxkaXYgbmctaWY9XCJoZWFkZXJQaWN0byAhPSBudWxsICYmIGhlYWRlclBpY3RvLmxlbmd0aCAhPSAwXCIgY2xhc3M9XCJoZWFkZXIge3toZWFkZXJCYWNrZ3JvdW5kQ29sb3J9fSB7e2hlYWRlckNvbG9yfX1cIj48ZGl2IGNsYXNzPXt7aGVhZGVyUGljdG99fT48L2Rpdj48L2Rpdj48ZGl2IG5nLWlmPVwiaGVhZGVyVGl0bGUgIT0gbnVsbCAmJiBoZWFkZXJUaXRsZS5sZW5ndGggIT0gMFwiIGNsYXNzPVwiaGVhZGVyLXRleHQge3toZWFkZXJCYWNrZ3JvdW5kQ29sb3J9fSB7e2hlYWRlckNvbG9yfX0gdGV4dC1sZWZ0XCI+e3toZWFkZXJUaXRsZX19PC9kaXY+PGRpdiBjbGFzcz1cIndyYXBwZXItYm9keSB7e2JvZHlCYWNrZ3JvdW5kQ29sb3J9fVwiPjxkaXYgbmctaWY9XCJib2R5VGl0bGUgIT0gbnVsbCAmJiBib2R5VGl0bGUubGVuZ3RoICE9IDBcIiBjbGFzcz1ib2R5LXRpdGxlPnt7Ym9keVRpdGxlfX08L2Rpdj48ZGl2IGNsYXNzPVwiYm9keS10ZXh0IHRleHQtanVzdGlmeVwiPnt7Ym9keVRleHR9fTwvZGl2PjwvZGl2PjwvZGl2Pidcblx0KiovXG5cdGFwcC5kaXJlY3RpdmUoJ2NvbXBsZXRlQmxvY2snLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc3RyaWN0OiAnRUEnLFxuXHRcdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0XHRzY29wZToge1xuXHRcdFx0XHRoZWFkZXJJbWc6ICdAaGVhZGVySW1nJyxcblx0XHRcdFx0aGVhZGVyVGl0bGU6ICdAaGVhZGVyVGl0bGUnLFxuXHRcdFx0XHRoZWFkZXJQaWN0bzogJ0BoZWFkZXJQaWN0bycsXG5cdFx0XHRcdGhlYWRlckNvbG9yOiAnQGhlYWRlckNvbG9yJyxcblx0XHRcdFx0aGVhZGVyQmFja2dyb3VuZENvbG9yOiAnQGhlYWRlckJhY2tncm91bmRDb2xvcicsXG5cdFx0XHRcdGJvZHlCYWNrZ3JvdW5kQ29sb3I6ICdAYm9keUJhY2tncm91bmRDb2xvcicsXG5cdFx0XHRcdGJvZHlUaXRsZTogJ0Bib2R5VGl0bGUnLFxuXHRcdFx0XHRib2R5VGV4dDogJ0Bib2R5VGV4dCdcblx0XHRcdH0sXG5cdFx0XHR0ZW1wbGF0ZTonPGRpdiBuZy1jbGFzcz1cIihoZWFkZXJQaWN0byAhPSBudWxsICYmIGhlYWRlclBpY3RvLmxlbmd0aCAhPSAwKSB8fCAoaGVhZGVyVGl0bGUgIT0gbnVsbCAmJiBoZWFkZXJUaXRsZS5sZW5ndGggIT0gMCkgPyBcXCdjb21wbGV0ZS1ibG9ja1xcJyA6IFxcJ2NvbXBsZXRlLWJsb2NrLW5vLWhlYWRlclxcJ1wiPjxkaXYgbmctaWY9XCJoZWFkZXJJbWcgIT0gbnVsbCAmJiBpbWcubGVuZ3RoICE9IDBcIiBjbGFzcz13cmFwcGVyLWhlYWRlci1pbWc+PGltZyBuZy1zcmM9e3toZWFkZXJJbWd9fSBjbGFzcz1pbWctcmVzcG9uc2l2ZT48L2Rpdj48ZGl2IG5nLWlmPVwiaGVhZGVyUGljdG8gIT0gbnVsbCAmJiBoZWFkZXJQaWN0by5sZW5ndGggIT0gMFwiIGNsYXNzPVwiaGVhZGVyIHt7aGVhZGVyQmFja2dyb3VuZENvbG9yfX0ge3toZWFkZXJDb2xvcn19XCI+PGRpdiBjbGFzcz17e2hlYWRlclBpY3RvfX0+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cImhlYWRlclRpdGxlICE9IG51bGwgJiYgaGVhZGVyVGl0bGUubGVuZ3RoICE9IDBcIiBjbGFzcz1cImhlYWRlci10ZXh0IHt7aGVhZGVyQmFja2dyb3VuZENvbG9yfX0ge3toZWFkZXJDb2xvcn19IHRleHQtbGVmdFwiPnt7aGVhZGVyVGl0bGV9fTwvZGl2PjxkaXYgY2xhc3M9XCJ3cmFwcGVyLWJvZHkge3tib2R5QmFja2dyb3VuZENvbG9yfX1cIj48ZGl2IG5nLWlmPVwiYm9keVRpdGxlICE9IG51bGwgJiYgYm9keVRpdGxlLmxlbmd0aCAhPSAwXCIgY2xhc3M9Ym9keS10aXRsZT57e2JvZHlUaXRsZX19PC9kaXY+PGRpdiBjbGFzcz1cImJvZHktdGV4dCB0ZXh0LWp1c3RpZnlcIj57e2JvZHlUZXh0fX08L2Rpdj48L2Rpdj48L2Rpdj4nXG5cdFx0fTtcblx0fSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
