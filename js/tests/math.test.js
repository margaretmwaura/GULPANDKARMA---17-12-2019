
describe("append", function() {
    beforeEach(function() {
        var dom = `<div id="dom"><p>This is my button , try clicking it</p> <p id="result">This is the results of the calculation</p>
<button id="button">Click me</button><p id="highlight">Testing Hughlightinh</p></div>`;

        document.body.insertAdjacentHTML(
            'afterbegin',
            dom);
    });

    beforeEach(function() {
        window.math.init();
    });

    it("should have a string",function ()
    {
        var content = window.document.getElementById('result').innerHTML;
        expect(content).toEqual("This is the results of the calculation");
    });
    it("should append 2 strings", function() {
        window.document.getElementById('button').click();
        var display = window.document.getElementById('result').innerHTML;
        console.log(display);
        expect(display).toBe("MaggieMwaura");

    });
    it("should change background color", function() {
        window.document.getElementById('highlight').dispatchEvent(new Event('mouseover'));
        var color = window.document.getElementById('highlight').style.backgroundColor;
        console.log(color);
        expect(color).toBe("blue");

    });

});